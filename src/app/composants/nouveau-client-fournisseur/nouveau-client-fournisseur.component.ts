import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faInfo, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nouveau-client-fournisseur',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrl: './nouveau-client-fournisseur.component.scss'
})
export class NouveauClientFournisseurComponent {

  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;
}
