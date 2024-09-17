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
  errorMsg: Array<string> = [];

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
          this.connectEntreprise();
        },
        error: (error) => {
          this.errorMsg = error.error.errors;
        }
      });
  }

  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password: 'som3R@nd0mP@$$word'
    };
    this.userService.login(authenticationRequest)
      .subscribe({
        next: (response) => {
          this.userService.setAccessToken(response);
          this.getUserByEmail(authenticationRequest.login);
          localStorage.setItem('origin', 'Inscription');
          this.router.navigate(['changerMotDePasse']);
        }
      });
  }

  getUserByEmail(email?: string): void {
    this.userService.getUserByEmail(email)
      .subscribe({
        next: (user) => {
          this.userService.setConnectedUser(user);
        }
      });
  }

}
