import {Component, OnInit} from '@angular/core';
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {ArticleService} from "../../../services/article/article.service";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NgForOf
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent implements OnInit{

  listeArticle: Array<ArticleDto> = [];

  constructor(
    private router: Router,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    this.articleService.findAllArticles()
      .subscribe( articles => {
        this.listeArticle = articles;
      })
  }

  nouvelArticle(): void {
    this.router.navigate(['NouvelArticle']);
  }
}
