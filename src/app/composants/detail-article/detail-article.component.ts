import {Component, Input} from '@angular/core';
import {faInfo, faEuroSign, faFontAwesome, faPencil, faTrashCan, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {ArticleDto} from "../../../gs-api/src/models/article-dto";

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss'
})
export class DetailArticleComponent {
  protected readonly faInfo = faInfo;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faPencil = faPencil;
  protected readonly faTrashCan = faTrashCan;
  protected readonly faEllipsis = faEllipsis;
  protected readonly faFontAwesome = faFontAwesome;

  @Input()
  articleDto: ArticleDto = {};


}
