/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ArticleDto } from '../models/article-dto';
import { delete7 } from '../fn/articles/delete-7';
import { Delete7$Params } from '../fn/articles/delete-7';
import { findAll8 } from '../fn/articles/find-all-8';
import { FindAll8$Params } from '../fn/articles/find-all-8';
import { findAllArticleByIdCategorie } from '../fn/articles/find-all-article-by-id-categorie';
import { FindAllArticleByIdCategorie$Params } from '../fn/articles/find-all-article-by-id-categorie';
import { findByCodeArticle } from '../fn/articles/find-by-code-article';
import { FindByCodeArticle$Params } from '../fn/articles/find-by-code-article';
import { findById8 } from '../fn/articles/find-by-id-8';
import { FindById8$Params } from '../fn/articles/find-by-id-8';
import { findHistoriqueCommandeClient } from '../fn/articles/find-historique-commande-client';
import { FindHistoriqueCommandeClient$Params } from '../fn/articles/find-historique-commande-client';
import { findHistoriqueCommandeFournisseur } from '../fn/articles/find-historique-commande-fournisseur';
import { FindHistoriqueCommandeFournisseur$Params } from '../fn/articles/find-historique-commande-fournisseur';
import { findHistoriqueVentes } from '../fn/articles/find-historique-ventes';
import { FindHistoriqueVentes$Params } from '../fn/articles/find-historique-ventes';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { save8 } from '../fn/articles/save-8';
import { Save8$Params } from '../fn/articles/save-8';


/**
 * API pour la gestion des articles
 */
@Injectable({ providedIn: 'root' })
export class ArticlesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save8()` */
  static readonly Save8Path = '/gestiondestock/v1/articles/create';

  /**
   * Enregistrer un article.
   *
   * Cette méthode permet d'enregistrer ou de modifier un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8$Response(params: Save8$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return save8(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer un article.
   *
   * Cette méthode permet d'enregistrer ou de modifier un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8(params: Save8$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.save8$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findById8()` */
  static readonly FindById8Path = '/gestiondestock/v1/articles/{idArticle}';

  /**
   * Rechercher un article par ID.
   *
   * Cette méthode permet de rechercher un article par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findById8(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un article par ID.
   *
   * Cette méthode permet de rechercher un article par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: FindById8$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findById8$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findHistoriqueVentes()` */
  static readonly FindHistoriqueVentesPath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoriqueVentes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueVentes$Response(params: FindHistoriqueVentes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneVenteDto>>> {
    return findHistoriqueVentes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoriqueVentes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueVentes(params: FindHistoriqueVentes$Params, context?: HttpContext): Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneVenteDto>>): Array<LigneVenteDto> => r.body)
    );
  }

  /** Path part for operation `findHistoriqueCommandeFournisseur()` */
  static readonly FindHistoriqueCommandeFournisseurPath = '/gestiondestock/v1/articles/historique/vente/commandefournisseur/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoriqueCommandeFournisseur()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueCommandeFournisseur$Response(params: FindHistoriqueCommandeFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    return findHistoriqueCommandeFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoriqueCommandeFournisseur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueCommandeFournisseur(params: FindHistoriqueCommandeFournisseur$Params, context?: HttpContext): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeFournisseurDto>>): Array<LigneCommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `findHistoriqueCommandeClient()` */
  static readonly FindHistoriqueCommandeClientPath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoriqueCommandeClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueCommandeClient$Response(params: FindHistoriqueCommandeClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    return findHistoriqueCommandeClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoriqueCommandeClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueCommandeClient(params: FindHistoriqueCommandeClient$Params, context?: HttpContext): Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeClientDto>>): Array<LigneCommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `findByCodeArticle()` */
  static readonly FindByCodeArticlePath = '/gestiondestock/v1/articles/filter/{codeArticle}';

  /**
   * Rechercher un article par CODE.
   *
   * Cette méthode permet de rechercher un article par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCodeArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle$Response(params: FindByCodeArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findByCodeArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un article par CODE.
   *
   * Cette méthode permet de rechercher un article par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCodeArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle(params: FindByCodeArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findByCodeArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findAllArticleByIdCategorie()` */
  static readonly FindAllArticleByIdCategoriePath = '/gestiondestock/v1/articles/filter/categorie/{idCategorie}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllArticleByIdCategorie()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllArticleByIdCategorie$Response(params: FindAllArticleByIdCategorie$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAllArticleByIdCategorie(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllArticleByIdCategorie$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllArticleByIdCategorie(params: FindAllArticleByIdCategorie$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategorie$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `findAll8()` */
  static readonly FindAll8Path = '/gestiondestock/v1/articles/all';

  /**
   * Renvoi la liste des articles.
   *
   * Cette méthode permet de rechercher et renvoyer la liste des articles existants dans la BDD
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: FindAll8$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAll8(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des articles.
   *
   * Cette méthode permet de rechercher et renvoyer la liste des articles existants dans la BDD
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: FindAll8$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAll8$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `delete7()` */
  static readonly Delete7Path = '/gestiondestock/v1/articles/delete/{idArticle}';

  /**
   * Supprimer un article.
   *
   * Cette méthode permet de supprimer un article par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: Delete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete7(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un article.
   *
   * Cette méthode permet de supprimer un article par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: Delete7$Params, context?: HttpContext): Observable<void> {
    return this.delete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
