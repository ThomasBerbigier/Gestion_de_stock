import { Component } from '@angular/core';
import {faInfo, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {
  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;

  constructor(
    private router: Router
  ) {
  }

  cancel(): void {
    this.router.navigate(['Articles']);
  }
}
