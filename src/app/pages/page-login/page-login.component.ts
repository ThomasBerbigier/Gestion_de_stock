import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {
  protected readonly faCheckSquare = faCheckSquare;
}
