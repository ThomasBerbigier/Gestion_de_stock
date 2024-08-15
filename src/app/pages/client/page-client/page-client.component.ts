import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailClientFournisseurComponent
} from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailClientFournisseurComponent
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent {

  constructor(
    private router: Router
  ) {}

  nouveauClient(): void {
    this.router.navigate(['nouveauClient'])
  }
}
