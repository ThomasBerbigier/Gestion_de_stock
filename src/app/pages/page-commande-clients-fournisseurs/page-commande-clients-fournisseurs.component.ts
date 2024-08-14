import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../composants/boutton-action/boutton-action.component";
import {
    DetailMouvementStockArticleComponent
} from "../../composants/detail-mouvement-stock-article/detail-mouvement-stock-article.component";
import {DetailMouvementStockComponent} from "../../composants/detail-mouvement-stock/detail-mouvement-stock.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {
  DetailCommandeClientFournisseurComponent
} from "../../composants/detail-commande-client-fournisseur/detail-commande-client-fournisseur.component";
import {DetailCommandeComponent} from "../../composants/detail-commande/detail-commande.component";

@Component({
  selector: 'app-page-commande-clients-fournisseurs',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailMouvementStockArticleComponent,
    DetailMouvementStockComponent,
    PaginationComponent,
    DetailCommandeClientFournisseurComponent,
    DetailCommandeComponent
  ],
  templateUrl: './page-commande-clients-fournisseurs.component.html',
  styleUrl: './page-commande-clients-fournisseurs.component.scss'
})
export class PageCommandeClientsFournisseursComponent {

}
