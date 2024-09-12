/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
export interface FournisseurDto {
  adresse?: AdresseDto;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
