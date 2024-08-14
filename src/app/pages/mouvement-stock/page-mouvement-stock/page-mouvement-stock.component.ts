import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailMouvementStockArticleComponent
} from "../../../composants/detail-mouvement-stock-article/detail-mouvement-stock-article.component";
import {
  DetailMouvementStockComponent
} from "../../../composants/detail-mouvement-stock/detail-mouvement-stock.component";

@Component({
  selector: 'app-page-mouvement-stock',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailMouvementStockArticleComponent,
    DetailMouvementStockComponent
  ],
  templateUrl: './page-mouvement-stock.component.html',
  styleUrl: './page-mouvement-stock.component.scss'
})
export class PageMouvementStockComponent {

}
