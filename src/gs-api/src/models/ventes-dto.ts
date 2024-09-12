/* tslint:disable */
/* eslint-disable */
import { LigneVenteDto } from '../models/ligne-vente-dto';
export interface VentesDto {
  code?: string;
  commentaire?: string;
  dateVente?: string;
  id?: number;
  idEntreprise?: number;
  ligneVentes?: Array<LigneVenteDto>;
}
