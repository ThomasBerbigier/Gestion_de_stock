/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
export interface EntrepriseDto {
  adresse?: AdresseDto;
  codeFiscal?: string;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  siteweb?: string;
}
