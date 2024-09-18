/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategorieDto } from '../models/categorie-dto';
import { delete6 } from '../fn/categories/delete-6';
import { Delete6$Params } from '../fn/categories/delete-6';
import { findAll7 } from '../fn/categories/find-all-7';
import { FindAll7$Params } from '../fn/categories/find-all-7';
import { findByCode3 } from '../fn/categories/find-by-code-3';
import { FindByCode3$Params } from '../fn/categories/find-by-code-3';
import { findById7 } from '../fn/categories/find-by-id-7';
import { FindById7$Params } from '../fn/categories/find-by-id-7';
import { save7 } from '../fn/categories/save-7';
import { Save7$Params } from '../fn/categories/save-7';


/**
 * API pour la gestion des catégories
 */
@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save7()` */
  static readonly Save7Path = '/gestiondestock/v1/categories/create';

  /**
   * Enregistrer une catégorie.
   *
   * Cette méthode permet d'enregistrer ou de modifier une catégorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7$Response(params: CategorieDto, context?: HttpContext | undefined): Observable<StrictHttpResponse<CategorieDto>> {
    return save7(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une catégorie.
   *
   * Cette méthode permet d'enregistrer ou de modifier une catégorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7(params: CategorieDto, context?: HttpContext): Observable<CategorieDto> {
    return this.save7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategorieDto>): CategorieDto => r.body)
    );
  }

  /** Path part for operation `findById7()` */
  static readonly FindById7Path = '/gestiondestock/v1/categories/{idCategorie}';

  /**
   * Rechercher une catégorie par ID.
   *
   * Cette méthode permet de rechercher une catégorie par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: number, context?: HttpContext | undefined): Observable<StrictHttpResponse<CategorieDto>> {
    return findById7(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une catégorie par ID.
   *
   * Cette méthode permet de rechercher une catégorie par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: number, context?: HttpContext): Observable<CategorieDto> {
    return this.findById7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategorieDto>): CategorieDto => r.body)
    );
  }

  /** Path part for operation `findByCode3()` */
  static readonly FindByCode3Path = '/gestiondestock/v1/categories/{codeCategorie}';

  /**
   * Rechercher une catégorie par CODE.
   *
   * Cette méthode permet de rechercher une catégorie par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode3$Response(params: FindByCode3$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieDto>> {
    return findByCode3(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une catégorie par CODE.
   *
   * Cette méthode permet de rechercher une catégorie par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode3(params: FindByCode3$Params, context?: HttpContext): Observable<CategorieDto> {
    return this.findByCode3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategorieDto>): CategorieDto => r.body)
    );
  }

  /** Path part for operation `findAll7()` */
  static readonly FindAll7Path = '/gestiondestock/v1/categories/all';

  /**
   * Renvoi la liste des catégories.
   *
   * Cette méthode permet de rechercher et renvoyer la liste des catégories existantes dans la BDD
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7$Response(params?: FindAll7$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategorieDto>>> {
    return findAll7(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des catégories.
   *
   * Cette méthode permet de rechercher et renvoyer la liste des catégories existantes dans la BDD
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7(params?: FindAll7$Params, context?: HttpContext): Observable<Array<CategorieDto>> {
    return this.findAll7$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategorieDto>>): Array<CategorieDto> => r.body)
    );
  }

  /** Path part for operation `delete6()` */
  static readonly Delete6Path = '/gestiondestock/v1/categories/delete/{idCategorie}';

  /**
   * Supprimer une catégorie.
   *
   * Cette méthode permet de supprimer une catégorie par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6$Response(params: number, context?: HttpContext | undefined): Observable<StrictHttpResponse<void>> {
    return delete6(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une catégorie.
   *
   * Cette méthode permet de supprimer une catégorie par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6(params: number, context?: HttpContext): Observable<void> {
    return this.delete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
