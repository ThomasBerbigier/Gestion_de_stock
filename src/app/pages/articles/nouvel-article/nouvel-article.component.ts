import {Component, OnInit} from '@angular/core';
import {faInfo, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../../services/article/article.service";
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {CategorieDto} from "../../../../gs-api/src/models/categorie-dto";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent implements OnInit {

  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;

  articleDto: ArticleDto = {};
  categorieDto: CategorieDto = {};
  listeCategorie: Array<CategorieDto> = [];
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private categorieService: CategorieService,
  ) {
  }

  ngOnInit(): void {
    this.categorieService.findAll()
      .subscribe(categories => {
        this.listeCategorie = categories;
      });
  }

  cancel(): void {
    this.router.navigate(['Articles']);
  }

  enregistrerArticle(): void {
    this.articleDto.categorie = this.categorieDto;
    this.articleService.enregistrerArticle(this.articleDto)
      .subscribe({
        next: (art) => {
          this.router.navigate(['Articles']);
        },
        error: (error) => {
          this.errorMsg = error.error.errors;
        },
        complete: () => {
        }
      });
  }
}
