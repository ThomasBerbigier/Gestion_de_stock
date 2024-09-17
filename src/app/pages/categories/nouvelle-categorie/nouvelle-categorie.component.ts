import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CategorieDto} from "../../../../gs-api/src/models/categorie-dto";
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {error} from "ng-packagr/lib/utils/log";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.scss'
})
export class NouvelleCategorieComponent implements OnInit{

  categorieDto: CategorieDto = {};
  errorMsg: Array<string> = [];

  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categorieService: CategorieService,
  ) {
  }

  ngOnInit(): void {
    const idCategorie = this.activatedRoute.snapshot.params['idCategorie'];
    if(idCategorie) {
      this.categorieService.findById(idCategorie)
        .subscribe(cat => {
          this.categorieDto = cat;
        });
    }
  }

  cancel(): void {
    this.router.navigate(['Categorie']);
  }

  enregistrerCategorie(): void {
    this.categorieService.enregistrerCategorie(this.categorieDto)
      .subscribe({
        next: (res) => {
          this.router.navigate(['Categorie']);

        },
        error: (error) => {
          this.errorMsg = error.error.errors;
        }
      });
  }
}
