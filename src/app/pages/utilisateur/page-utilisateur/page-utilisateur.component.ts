import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {
  DetailClientFournisseurComponent
} from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {DetailUtilisateurComponent} from "../../../composants/detail-utilisateur/detail-utilisateur.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-utilisateur',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailClientFournisseurComponent,
    PaginationComponent,
    DetailUtilisateurComponent
  ],
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.scss'
})
export class PageUtilisateurComponent {

  constructor(
    private router: Router
  ) {}

  nouvelUtilisateur(): void {
    this.router.navigate(['nouvelUtilisateur']);
  }
}
