import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent implements OnInit {

  protected readonly faXmark = faXmark;
  protected readonly faSquarePlus = faSquarePlus;

  constructor(
    private utili: CategoriesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.utili.findAll7()
      .subscribe(res => {
    });
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }
}
