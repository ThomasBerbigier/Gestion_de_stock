import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faInfo, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nouvel-utilisateur',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrl: './nouvel-utilisateur.component.scss'
})
export class NouvelUtilisateurComponent {

  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;
}
