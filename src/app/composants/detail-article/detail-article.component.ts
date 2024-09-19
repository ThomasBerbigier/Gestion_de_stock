import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  faInfo,
  faEuroSign,
  faFontAwesome,
  faPencil,
  faTrashCan,
  faEllipsis,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {ArticleDto} from "../../../gs-api/src/models/article-dto";
import {Router} from "@angular/router";
import {ArticleService} from "../../services/article/article.service";

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss'
})
export class DetailArticleComponent {
  protected readonly faInfo = faInfo;
  protected readonly faEuroSign = faEuroSign;
  protected readonly faPencil = faPencil;
  protected readonly faTrashCan = faTrashCan;
  protected readonly faEllipsis = faEllipsis;
  protected readonly faFontAwesome = faFontAwesome;
  protected readonly faXmark = faXmark;

  @Input()
  articleDto: ArticleDto = {};
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ArticleService,
  ) {
  }

  modifierArticle(): void {
    this.router.navigate(['NouvelArticle', this.articleDto.id]);
  }

  confirmerSupprimerArticle(): void {
    if (this.articleDto.id) {
      this.articleService.deleteArticle(this.articleDto.id)
        .subscribe({
          next: (res) => {
            this.suppressionResult.emit('success');
          },
          error: (error) => {
            this.suppressionResult.emit(error.error.error);
          },
          complete: () => {
            // Ajouter un traitement final si nécessaire
          }
        });
    }
  }


  annulerSupprimerArticle() {

  }



}
