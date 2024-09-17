import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faCheckSquare, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faCheckSquare = faCheckSquare;

  connectedUser: UtilisateurDto = {};

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
  }
}
