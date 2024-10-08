import type {PersonalInformationDocumentTypeEnum} from "~/types/enums/PersonalInformationDocumentTypeEnum";

export interface PersonalInformationDocumentDTO {
    documentNumber : string;
    documentType : PersonalInformationDocumentTypeEnum,
    expirationDate : Date
}