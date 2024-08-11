import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-inscription',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.scss'
})
export class PageInscriptionComponent {
  protected readonly faCheckSquare = faCheckSquare;
}
