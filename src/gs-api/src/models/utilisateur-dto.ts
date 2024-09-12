/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
import { RolesDto } from '../models/roles-dto';
export interface UtilisateurDto {
  adresse?: AdresseDto;
  dateDeNaissance?: string;
  email?: string;
  entreprise?: EntrepriseDto;
  id?: number;
  motDePasse?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
  roles?: Array<RolesDto>;
}
