<script setup lang="ts">
import {AccessRequestTypeEnum} from "~/types/enums/AccessRequestTypeEnum";

const accessType = ref<AccessRequestTypeEnum>();

const emit = defineEmits<{
  (e: 'selected'): void
}>()

const setAccessType = (value: AccessRequestTypeEnum): void => {
  accessType.value = value;
  emit("selected")
}

</script>

<template>
  <div>
    <h4 class="text-center mb-5">Tipo de Acesso</h4>
    <div class="list-group">
      <div class="list-group-item list-group-item-action" @click="setAccessType(AccessRequestTypeEnum.Temporary)" v-bind:class="{active: accessType === AccessRequestTypeEnum.Temporary}">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Acesso Temporario</h5>
          <small>
            <i class="ri-time-line"></i> 48h uteis
          </small>
        </div>
        <p class="mb-1">Pedido de acesso com um maximo de 30 dias.</p>
      </div>
      <div class="list-group-item list-group-item-action" @click="setAccessType(AccessRequestTypeEnum.Permanent)" v-bind:class="{active: accessType === AccessRequestTypeEnum.Permanent}">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Acesso Permanente</h5>
          <small>
            <i class="ri-time-line"></i>15 dias uteis
          </small>
        </div>
        <p class="mb-1">Acesso permanente durante o ano em curso.</p>
      </div>
      <div class="list-group-item list-group-item-action" @click="setAccessType(AccessRequestTypeEnum.Renew)" v-bind:class="{active: accessType === AccessRequestTypeEnum.Renew}">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Pedido de Renovação</h5>
          <small>
            <i class="ri-time-line"></i>7 dias uteis
          </small>
        </div>
        <p class="mb-1">Renovação dos passes para proximo ano.</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>