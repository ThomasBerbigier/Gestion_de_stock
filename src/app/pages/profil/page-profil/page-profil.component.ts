import { Component } from '@angular/core';
import {faLock, faPencil} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
@Component({
  selector: 'app-page-profil',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent {
  protected readonly faLock = faLock;
  protected readonly faPencil = faPencil;
}
