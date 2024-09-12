/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
export interface LigneCommandeFournisseurDto {
  article?: ArticleDto;
  commandeFournisseur?: CommandeFournisseurDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
