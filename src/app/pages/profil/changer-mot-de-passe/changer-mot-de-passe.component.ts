import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent {

  protected readonly faXmark = faXmark;
  protected readonly faSquarePlus = faSquarePlus;
}
