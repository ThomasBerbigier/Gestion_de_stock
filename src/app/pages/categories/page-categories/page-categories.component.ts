import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {CategorieDto} from "../../../../gs-api/src/models/categorie-dto";
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {NgForOf, NgIf} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEllipsis, faPencil, faTrashCan, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-page-categories',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    NgForOf,
    NgIf,
    FaIconComponent
  ],
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent implements OnInit{

  protected readonly faXmark = faXmark;
  protected readonly faTrashCan = faTrashCan;
  protected readonly faPencil = faPencil;
  protected readonly faEllipsis = faEllipsis;


  listCategories: Array<CategorieDto> = [];
  selectedCatIdToDelete ? = -1;
  errorMsg = '';

  constructor(
    private router: Router,
    private categorieService: CategorieService,
  ) {}

  ngOnInit() {
    this.findAllCategories()
  }

  findAllCategories() {
    this.categorieService.findAll()
    .subscribe(res => {
      this.listCategories = res;
    })

  }

  nouvelleCategorie() {
    this.router.navigate(['nouvelleCategorie'])
  }

  modifierCategorie(id: number | undefined): void {
    this.router.navigate(['nouvelleCategorie', id]);
  }

  selectSupprimerCat(id?: number): void {
    this.selectedCatIdToDelete = id;
  }

  confirmerSupprimerCat(): void {
    if (this.selectedCatIdToDelete !== -1) {
      this.categorieService.delete(this.selectedCatIdToDelete)
        .subscribe({
          next: (res) => {
            this.findAllCategories();
          },
          error: (error) => {
            this.errorMsg = error.error.message;
          }
        });
    }
  }

  annulerSupprimerCat(): void {
    this.selectedCatIdToDelete = -1;
  }
}
