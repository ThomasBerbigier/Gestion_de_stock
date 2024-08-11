import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLoginComponent, PageInscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projet-angular';
}
