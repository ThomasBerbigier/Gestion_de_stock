import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from "@angular/router";
import {PageInscriptionComponent} from "../page-inscription/page-inscription.component";

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {
  protected readonly faCheckSquare = faCheckSquare;
  protected readonly PageInscriptionComponent = PageInscriptionComponent;
}
