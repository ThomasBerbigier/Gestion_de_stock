import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faInfo,
  faEuroSign,
  faPencil,
  faBoxesStacked, faSquarePlus, faXmark, faCheckSquare
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-mouvement-stock-article',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './detail-mouvement-stock-article.component.html',
  styleUrl: './detail-mouvement-stock-article.component.scss'
})
export class DetailMouvementStockArticleComponent {
  protected readonly faBoxesStacked = faBoxesStacked;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faPencil = faPencil;
  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;
}
