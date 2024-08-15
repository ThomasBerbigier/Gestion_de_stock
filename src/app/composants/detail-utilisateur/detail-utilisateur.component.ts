import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faEarthAmerica, faEllipsis,
  faHome,
  faInfo,
  faMapLocationDot,
  faPencil,
  faPhone,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-utilisateur',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './detail-utilisateur.component.html',
  styleUrl: './detail-utilisateur.component.scss'
})
export class DetailUtilisateurComponent {

  protected readonly faInfo = faInfo;
  protected readonly faPhone = faPhone;
  protected readonly faHome = faHome;
  protected readonly faMapLocationDot = faMapLocationDot;
  protected readonly faEarthAmerica = faEarthAmerica;
  protected readonly faPencil = faPencil;
  protected readonly faTrashCan = faTrashCan;
  protected readonly faEllipsis = faEllipsis;
}
