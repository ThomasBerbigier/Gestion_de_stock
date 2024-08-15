import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEuroSign, faHourglass, faInfo, faPhone, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {DetailArticleComponent} from "../detail-article/detail-article.component";
import {DetailCommandeComponent} from "../detail-commande/detail-commande.component";

@Component({
  selector: 'app-nouvelle-commande-client-fournisseur',
  standalone: true,
  imports: [
    FaIconComponent,
    DetailArticleComponent,
    DetailCommandeComponent
  ],
  templateUrl: './nouvelle-commande-client-fournisseur.component.html',
  styleUrl: './nouvelle-commande-client-fournisseur.component.scss'
})
export class NouvelleCommandeClientFournisseurComponent {

  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;
  protected readonly faInfo = faInfo;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faPhone = faPhone;
  protected readonly faHourglass = faHourglass;
}
