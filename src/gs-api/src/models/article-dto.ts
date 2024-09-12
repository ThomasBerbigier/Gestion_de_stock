/* tslint:disable */
/* eslint-disable */
import { CategorieDto } from '../models/categorie-dto';
export interface ArticleDto {
  categorie?: CategorieDto;
  codeArticle?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
