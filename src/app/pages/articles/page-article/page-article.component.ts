import { Component } from '@angular/core';
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent {

}
