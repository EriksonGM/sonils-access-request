import type {VehicleInformationDTO} from "~/types/VehicleInformationDTO";

export interface AccessRequestDTO {
    companyId : string;
    companyName : string;
    companyNif : string;
    companyAddress : string;
    companyLogo : string;
    peoples : [];
    vehicles : VehicleInformationDTO[];
}

/*
* {
  companyId: String,
  companyName: String,
  companyNif: String,
  companyAddress: String,
  companyLogo: String,
  contactName: String,
  contactEmail: String,
  contactPhoneNumber: String,
  requestType: String,
  people: [],
  vehicles: []
}*/