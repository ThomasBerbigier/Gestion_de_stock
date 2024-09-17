import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {ChangerMotDePasseUtilisateurDto} from "../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule
  ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent implements OnInit {

  protected readonly faXmark = faXmark;
  protected readonly faSquarePlus = faSquarePlus;

  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';

  constructor(
    private utili: CategoriesService,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('origin') && localStorage.getItem('origin') === 'Inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasseDto)
      .subscribe(data => {
        this.router.navigate(['profil']);
      });
  }
}
