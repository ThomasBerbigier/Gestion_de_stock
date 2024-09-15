import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {Router, RouterLink} from "@angular/router";
import {PageInscriptionComponent} from "../page-inscription/page-inscription.component";
import {UserService} from "../../services/user/user.service";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {catchError, of, tap} from "rxjs";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FormsModule, NgIf],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {
  protected readonly faCheckSquare = faCheckSquare;
  protected readonly PageInscriptionComponent = PageInscriptionComponent;

  authenticationRequest : AuthenticationRequest = {};
  errorMessage = "";

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
  }

  login() {
    this.userService.login(this.authenticationRequest).pipe(
      tap((data: AuthenticationResponse) => {
        this.userService.setConnectedUser(data);
        this.router.navigate(['']);
      }),
      catchError(error => {
        this.errorMessage = "Email et / ou mot de passe incorrect";
        return of(null);  // Retourne un observable pour permettre la continuité
      })
    ).subscribe();  // Nécessaire pour déclencher l'exécution de l'observable
  }
}
