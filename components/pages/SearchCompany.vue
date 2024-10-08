<script setup lang="ts">

import type {CompanyDTO} from "~/types/CompanyDTO";

const company = ref<CompanyDTO>({
  companyId: '000000000',
  companyName: 'SCHLUMBERGER Angola',
  companyNif: '5410002423',
  companyAddress: 'Rua 6',
  companyLogo: ''
});

const nif = ref('')

const emit = defineEmits<{
  (e: 'found', company: CompanyDTO): void
  (e: 'not-found'): void
}>()

const search = () => {
  if (nif.value == '5410002423')
    emit("found", company.value);
  else
    emit("not-found");
}
</script>

<template>
  <form class="w-full d-flex justify-content-center align-items-center" @submit.prevent="search">
    <div class="input-group mb-3 w-50">
      <input type="text" class="form-control" placeholder="NIF da Empresa" aria-label="NIF Empresa"
             aria-describedby="button-addon2" required minlength="10" autocomplete="off" v-model="nif">
      <button class="btn btn-outline-primary" type="submit" id="button-addon2">
        <i class="ri-search-line"></i>
        Pesquisar
      </button>
    </div>
  </form>

</template>

<style scoped>
form {
  min-height: 20rem;
}
</style>