import { Component } from '@angular/core';
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent {

}
