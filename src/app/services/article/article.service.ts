import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ArticleDto} from "../../../gs-api/src/models/article-dto";
import {Observable, of} from "rxjs";
import {ArticlesService} from "../../../gs-api/src/services/articles.service";
import {CategorieDto} from "../../../gs-api/src/models/categorie-dto";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private userService: UserService,
    private articlesService: ArticlesService,
  ) { }

  enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto> {
    articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.articlesService.save8(articleDto);
  }

  findAllArticles(): Observable<ArticleDto[]> {
    return this.articlesService.findAll8();
  }

  findArticleById(idArticle?: number): Observable<ArticleDto> {
    if(idArticle) {
      return this.articlesService.findById8(idArticle);
    }
      return of();
  }

  deleteArticle(idArticle: number): Observable<any> {
    if(idArticle) {
      return this.articlesService.delete7(idArticle);
    }
    return of();
  }
}
