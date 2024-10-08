<script setup lang="ts">

import SearchCompany from "~/components/pages/SearchCompany.vue";
import Peoples from "~/components/pages/Peoples.vue";
import Vehicles from "~/components/pages/Vehicles.vue";
import RequestType from "~/components/pages/RequestType.vue";
import CompanyInfo from "~/components/pages/CompanyInfo.vue";
import type {CompanyDTO} from "~/types/CompanyDTO";
import Confirmation from "~/components/pages/Confirmation.vue";

const route = useRoute()

enum CurrentStep {
  SearchCompany,
  CompanyInfo,
  RequestType,
  Peoples,
  Vehicles,
  Confirmation
}

const page = ref({
  hiddeFooter: true,
  disablePrev: false,
  disableNext: false,
  currentStep: CurrentStep.SearchCompany,
})

const req = ref()

const companyNotFound = () => {
  page.value.currentStep = CurrentStep.CompanyInfo;
  page.value.hiddeFooter = false;
}

const companyFound = (company: CompanyDTO) => {
  page.value.currentStep = CurrentStep.CompanyInfo;
  req.value.companyId = company.companyId;
}

const nextStep = async () => {
  page.value.disablePrev = false;
  switch (page.value.currentStep) {
    case CurrentStep.SearchCompany:
      page.value.currentStep = CurrentStep.CompanyInfo;
      return;
    case CurrentStep.CompanyInfo:
      page.value.currentStep = CurrentStep.RequestType;
      return;
    case CurrentStep.RequestType:
      page.value.currentStep = CurrentStep.Peoples;
      return;
    case CurrentStep.Peoples:
      page.value.currentStep = CurrentStep.Vehicles;
      return;
    case CurrentStep.Vehicles:
      page.value.currentStep = CurrentStep.Confirmation;
      return;
    case CurrentStep.Confirmation:
      page.value.currentStep = CurrentStep.RequestType;

      await navigateTo('/success');
      return;
  }
}

const prevStep = () => {
  switch (page.value.currentStep) {
    case CurrentStep.Confirmation:
      page.value.currentStep = CurrentStep.Vehicles;
      return;
    case CurrentStep.Vehicles:
      page.value.currentStep = CurrentStep.Peoples;
      return;
    case CurrentStep.Peoples:
      page.value.currentStep = CurrentStep.RequestType;
      return;
    case CurrentStep.RequestType:
      page.value.currentStep = CurrentStep.CompanyInfo;
      return;
    case CurrentStep.CompanyInfo:
      page.value.disablePrev = true;
      page.value.currentStep = CurrentStep.SearchCompany;
      return;
  }
}
</script>

<template>
  <h2 class="mb-2 text-center">Formulário de Acesso</h2>

  <!--  <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
    </div>-->

  <div class="flex-fill steps-container">
    <transition mode="out-in">
      <SearchCompany v-if="page.currentStep === CurrentStep.SearchCompany" @not-found="companyNotFound"/>
      <CompanyInfo v-else-if="page.currentStep === CurrentStep.CompanyInfo"/>
      <RequestType v-else-if="page.currentStep === CurrentStep.RequestType" @selected="page.currentStep = CurrentStep.Peoples" />
      <Peoples v-else-if="page.currentStep === CurrentStep.Peoples"/>
      <Vehicles v-else-if="page.currentStep === CurrentStep.Vehicles"/>
      <Confirmation v-else-if="page.currentStep === CurrentStep.Confirmation"/>
    </transition>
  </div>

  <div class="d-flex justify-content-between" v-if="!page.hiddeFooter">

    <button class="btn btn-outline-success" @click="prevStep" :disabled="page.disablePrev">
      <i class="me-2 ri-arrow-left-circle-line"></i>
      Voltar
    </button>

    <button class="btn btn-outline-success" @click="nextStep" v-if="page.currentStep === CurrentStep.Confirmation">
      Criar Pedido
      <i class="ms-2 ri-save-3-line"></i>
    </button>

    <button class="btn btn-outline-success" @click="nextStep" v-else>
      Seguinte
      <i class="ms-2 ri-arrow-right-circle-line"></i>
    </button>
  </div>
</template>

<style scoped>
.steps-container {
  padding-top: 3rem;
}

.btn {
  min-width: 8rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
