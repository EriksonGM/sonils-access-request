<script setup lang="ts">
import type {PersonalInformationDTO} from "~/types/PersonalInformationDTO";
import {PersonalInformationDocumentTypeEnum} from "~/types/enums/PersonalInformationDocumentTypeEnum";


const peoples = ref<PersonalInformationDTO[]>(
    [
      {
        name: 'Erikson Melgarejo', documents: [
          {
            documentNumber: '000000000LA000',
            documentType: PersonalInformationDocumentTypeEnum.BI,
            expirationDate: new Date()
          },
        ]
      },
      {
        name: 'Josemar Santos', documents: [
          {
            documentNumber: 'AO000001',
            documentType: PersonalInformationDocumentTypeEnum.ResidentCard,
            expirationDate: new Date()
          },
        ]
      },
      {
        name: 'Bill Gates', documents: [
          {
            documentNumber: 'USA00001',
            documentType: PersonalInformationDocumentTypeEnum.Passport,
            expirationDate: new Date()
          },
        ]
      }
    ]
);

const peopleToAdd = ref({
  name: String,
  documentNumber: String,
  documentType: PersonalInformationDocumentTypeEnum.BI,
})
</script>

<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <span class="text-center h4">Utentes</span>
      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addPeopleModal">
        <i class="ri-add-line me-2"></i>
        Adicionar Utente
      </button>
    </div>

    <table class="table table-hover table-striped align-middle">
      <thead class="table-light">
      <tr>
        <th scope="col" style="width: 5px"></th>
        <th scope="col">Nome</th>
        <th scope="col">Tipo Documento</th>
        <th scope="col">Nº Documento</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="p in peoples">
        <td>
          <button class="btn btn-outline-danger btn-sm">
            <i class="ri-delete-bin-5-line"></i>
          </button>

        </td>
        <td>{{ p.name }}</td>
        <td>{{ p.documents[0].documentType }}</td>
        <td>{{ p.documents[0].documentNumber }}</td>
      </tr>
      </tbody>
    </table>

    <div class="modal fade" id="addPeopleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Adicionar Utente</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="name">Nome</label>
              <input id="name" class="form-control"/>
            </div>
            <div class="mb-3">
              <label for="document-type">Tipo de Documento</label>
              <select class="form-select" id="document-type" v-model="peopleToAdd.documentType">
                <option :value="PersonalInformationDocumentTypeEnum.BI">Bilhete de Identidade</option>
                <option :value="PersonalInformationDocumentTypeEnum.ResidentCard">Cartão de Residente</option>
                <option :value="PersonalInformationDocumentTypeEnum.Passport">Passaporte</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="document-number">Nº do Documento</label>
              <input id="document-number" class="form-control"/>
            </div>

            <div class="mb-3">
              <label for="document-expiration">Data de Validade</label>
              <input id="document-expiration" class="form-control" type="date"/>
            </div>

            <div class="mb-3">
              <label for="document-scan">Anexo</label>
              <input id="document-scan" class="form-control" type="file" accept=".jpg, .png, .pdf"/>
            </div>

            <template v-if="peopleToAdd.documentType == PersonalInformationDocumentTypeEnum.Passport">
              <hr/>
              <div class="alert alert-warning" role="alert">
                No caso de <strong>Passaporte</strong>, deve ser anexado um visto válido.
              </div>

              <div class="mb-3">
                <label for="visa-number">Nº do Documento</label>
                <input id="visa-number" class="form-control"/>
              </div>

              <div class="mb-3">
                <label for="visa-expiration">Data de Validade</label>
                <input id="visa-expiration" class="form-control" type="date"/>
              </div>

              <div class="mb-3">
                <label for="visa-scan">Anexo</label>
                <input id="visa-scan" class="form-control" type="file" accept=".jpg, .png, .pdf"/>
              </div>
            </template>

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
</template>

<style scoped>

</style>