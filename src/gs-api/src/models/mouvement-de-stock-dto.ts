/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
export interface MouvementDeStockDto {
  article?: ArticleDto;
  dateMouvement?: string;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMouvementDeStock?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMouvementDeStock?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
