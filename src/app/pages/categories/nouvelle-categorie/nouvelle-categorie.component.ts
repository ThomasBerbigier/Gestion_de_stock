import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.scss'
})
export class NouvelleCategorieComponent {

  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;

  constructor(
    private router: Router
  ) {
  }

  cancel(): void {
    this.router.navigate(['Categorie']);
  }
}
