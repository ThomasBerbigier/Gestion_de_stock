/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
import { VentesDto } from '../models/ventes-dto';
export interface LigneVenteDto {
  article?: ArticleDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: VentesDto;
}
