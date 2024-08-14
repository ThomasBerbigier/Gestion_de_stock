import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faBoxesStacked, faCalendar, faCartArrowDown, faEllipsis,
  faEuroSign, faHome,
  faInfo,
  faPencil, faPhone, faQrcode,
  faSquarePlus,
  faTrashCan,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-commande-client-fournisseur',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './detail-commande-client-fournisseur.component.html',
  styleUrl: './detail-commande-client-fournisseur.component.scss'
})
export class DetailCommandeClientFournisseurComponent {

  protected readonly faXmark = faXmark;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faPencil = faPencil;
  protected readonly faBoxesStacked = faBoxesStacked;
  protected readonly faInfo = faInfo;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faTrashCan = faTrashCan;
  protected readonly faEllipsis = faEllipsis;
  protected readonly faPhone = faPhone;
  protected readonly faHome = faHome;
  protected readonly faQrcode = faQrcode;
  protected readonly faCalendar = faCalendar;
  protected readonly faCartArrowDown = faCartArrowDown;
}
