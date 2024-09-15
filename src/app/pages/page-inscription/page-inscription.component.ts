import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {Router, RouterLink} from "@angular/router";
import {EntrepriseDto} from "../../../gs-api/src/models/entreprise-dto";
import {FormsModule} from "@angular/forms";
import {EntrepriseService} from "../../services/entreprise/entreprise.service";
import {AdresseDto} from "../../../gs-api/src/models/adresse-dto";
import {NgForOf, NgIf} from "@angular/common";
import {UserService} from "../../services/user/user.service";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";

@Component({
  selector: 'app-page-inscription',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FormsModule, NgForOf, NgIf],
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.scss'
})
export class PageInscriptionComponent {
  protected readonly faCheckSquare = faCheckSquare;

  entrepriseDto: EntrepriseDto = {};
  adresse: AdresseDto = {};
  errorMsg: string[] = [];

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router,
  ) {
  }

  inscrire(): void {
    this.entrepriseDto.adresse = this.adresse;
    this.entrepriseService.sinscrire(this.entrepriseDto)
      .subscribe({
        next: (entrepriseDto) => {
          // Logique quand l'inscription réussit
          const authenticationRequest: AuthenticationRequest = {
            login: this.entrepriseDto.email,
            password: 'som3R@nd0mP@$$word'
          }
          this.userService.login(authenticationRequest)
            .subscribe(response => {
              this.userService.setConnectedUser(response);
              this.router.navigate(['changerMotDePasse']);
            })
        },
        error: (error) => {
          if (error.error instanceof Blob) {
            // Si l'erreur est de type Blob, la convertir en texte puis en JSON
            error.error.text().then((text: string) => {
              try {
                const jsonError = JSON.parse(text); // Convertir le texte en JSON
                this.errorMsg = jsonError.errors || ['Erreur inconnue'];
              } catch (e) {
                this.errorMsg = ['Erreur inconnue'];
              }
            });
          } else {
            this.errorMsg = error.error.errors || ['Erreur inconnue'];
          }
        },
        complete: () => {
          // Logique à exécuter une fois que l'observable est complété, si nécessaire
        }
      });
  }


}
