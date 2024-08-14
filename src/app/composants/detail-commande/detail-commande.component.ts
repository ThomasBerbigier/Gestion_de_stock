import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCartShopping, faEuroSign, faInfo, faQrcode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-commande',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './detail-commande.component.html',
  styleUrl: './detail-commande.component.scss'
})
export class DetailCommandeComponent {

  protected readonly faQrcode = faQrcode;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faInfo = faInfo;
}
