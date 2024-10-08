<script setup lang="ts">
import type {VehicleInformationDTO} from "~/types/VehicleInformationDTO";
import {PersonalInformationDocumentTypeEnum} from "~/types/enums/PersonalInformationDocumentTypeEnum";

const vehicles = ref<VehicleInformationDTO[]>(
    [
        { brand: 'Toyota', model: 'Hilux', licencePlate : 'LDA-00-00-AA'},
        { brand: 'Ferrari', model: 'Purosangue', licencePlate : 'LDA-00-00-AB'},
        { brand: 'Lamborghini', model: 'Urus', licencePlate : 'LDA-00-00-AC'}
    ]
)
</script>

<template>
<div>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <span class="text-center h4">Viaturas</span>
      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addVehicleModal">
        <i class="ri-add-line me-2"></i>
        Adicionar Viatura
      </button>
    </div>

    <table class="table table-hover table-striped align-middle">
      <thead class="table-light">
      <tr>
        <th scope="col" style="width: 5px"></th>
        <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
        <th scope="col">Matricula</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="v in vehicles">
        <td>
          <button class="btn btn-outline-danger btn-sm">
            <i class="ri-delete-bin-5-line"></i>
          </button>

        </td>
        <td>{{ v.brand }}</td>
        <td>{{ v.model }}</td>
        <td>{{ v.licencePlate}}</td>
      </tr>
      </tbody>
    </table>

    <div class="modal fade" id="addVehicleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Adicionar Viatura</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="brand">Marca</label>
              <input id="brand" class="form-control"/>
            </div>

            <div class="mb-3">
              <label for="model">Modelo</label>
              <input id="model" class="form-control"/>
            </div>

            <div class="mb-3">
              <label for="licencePlate">Matricula</label>
              <input id="licencePlate" class="form-control"/>
            </div>

            <div class="mb-3">
              <label for="livrete">Livrete</label>
              <input id="livrete" class="form-control" type="file" accept=".jpg, .png, .pdf"/>
            </div>

            <div class="mb-3">
              <label for="ensure">Seguro</label>
              <input id="ensure" class="form-control" type="file" accept=".jpg, .png, .pdf"/>
            </div>

          </div>
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <i class="ri-close-line me-2"></i>Cancelar
            </button>
            <button type="button" class="btn btn-outline-success"><i class="ri-add-line me-2"></i>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>