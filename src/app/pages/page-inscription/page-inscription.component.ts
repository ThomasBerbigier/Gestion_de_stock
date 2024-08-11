import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-inscription',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.scss'
})
export class PageInscriptionComponent {
  protected readonly faCheckSquare = faCheckSquare;
}
