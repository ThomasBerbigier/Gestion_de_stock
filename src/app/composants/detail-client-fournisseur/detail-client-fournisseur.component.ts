import {Component, Input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faEarthAmerica, faEllipsis,
  faEuroSign, faFontAwesome,
  faHome,
  faInfo,
  faMapLocationDot, faPencil,
  faPhone,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {Router} from "@angular/router";
@Component({
  selector: 'app-detail-client-fournisseur',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './detail-client-fournisseur.component.html',
  styleUrl: './detail-client-fournisseur.component.scss'
})
export class DetailClientFournisseurComponent {

  protected readonly faPhone = faPhone;
  protected readonly faHome = faHome;
  protected readonly faMapLocationDot = faMapLocationDot;
  protected readonly faEarthAmerica = faEarthAmerica;
  protected readonly faInfo = faInfo;
  protected readonly faTrashCan = faTrashCan;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faFontAwesome = faFontAwesome;
  protected readonly faEllipsis = faEllipsis;
  protected readonly faPencil = faPencil;

  @Input()
  origin = '';

  @Input()
  clientFournisseur: any = {};


  constructor(
    private router: Router,
  ) {
  }

  modifierClientFournisseur() {
    if(this.origin === 'client') {
      this.router.navigate(['nouveauClient', this.clientFournisseur.id]);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouveauFournisseur', this.clientFournisseur.id]);
    }
  }
}
