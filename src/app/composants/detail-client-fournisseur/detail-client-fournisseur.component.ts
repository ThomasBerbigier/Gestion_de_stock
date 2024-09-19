import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faEarthAmerica, faEllipsis,
  faEuroSign, faFontAwesome,
  faHome,
  faInfo,
  faMapLocationDot, faPencil,
  faPhone,
  faTrashCan, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {Router} from "@angular/router";
import {CltfrnService} from "../../services/cltfrn/cltfrn.service";
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
  protected readonly faXmark = faXmark;


  @Input()
  origin = '';
  @Input()
  clientFournisseur: any = {};
  @Output()
  suppressionResult = new EventEmitter();


  constructor(
    private router: Router,
    private cltFrnService: CltfrnService,
  ) {
  }

  modifierClientFournisseur() {
    if(this.origin === 'client') {
      this.router.navigate(['nouveauClient', this.clientFournisseur.id]);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouveauFournisseur', this.clientFournisseur.id]);
    }
  }

  confirmerSupprimer():void {
    if(this.origin === 'client') {
      this.cltFrnService.deleteClient(this.clientFournisseur.id)
        .subscribe({
          next: (res) => {
            this.suppressionResult.emit('success');
          },
          error: (error) => {
            this.suppressionResult.emit(error.error.error);
          },
          complete: () => {
            // Ajouter un traitement final si nécessaire
          }
        });
    } else if (this.origin === 'fournisseur') {
      this.cltFrnService.deleteFournisseur(this.clientFournisseur.id)
        .subscribe({
          next: (res) => {
            this.suppressionResult.emit('success');
          },
          error: (error) => {
            this.suppressionResult.emit(error.error.error);
          },
          complete: () => {
            // Ajouter un traitement final si nécessaire
          }
        });
    }
  }

  annulerSupprimer() {

  }
}
