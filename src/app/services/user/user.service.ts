import { Injectable } from '@angular/core';
import {AuthenticationService} from "../../../gs-api/src/services";
import {Router} from "@angular/router";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor
  (
    private authenticationService: AuthenticationService,
    private router: Router,
  )
  {
  }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  setConnectedUser(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('connectedUser', JSON.stringify(authenticationResponse));
  }

  isUserLoggedAndAccessTokenValid(): boolean {
    if(localStorage.getItem('connectedUser')){
      return true;
    }
    this.router.navigate(['Login']);
    return false;
  }
}
