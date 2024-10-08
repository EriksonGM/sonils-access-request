import type {PersonalInformationDocumentDTO} from "~/types/PersonalInformationDocumentDTO";

export interface PersonalInformationDTO {
    name: string;
    documents: PersonalInformationDocumentDTO[]
}