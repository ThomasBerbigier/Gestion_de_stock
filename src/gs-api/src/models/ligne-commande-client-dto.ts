/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
