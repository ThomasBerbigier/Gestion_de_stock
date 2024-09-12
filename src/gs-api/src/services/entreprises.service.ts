/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete3 } from '../fn/entreprises/delete-3';
import { Delete3$Params } from '../fn/entreprises/delete-3';
import { EntrepriseDto } from '../models/entreprise-dto';
import { findAll3 } from '../fn/entreprises/find-all-3';
import { FindAll3$Params } from '../fn/entreprises/find-all-3';
import { findById3 } from '../fn/entreprises/find-by-id-3';
import { FindById3$Params } from '../fn/entreprises/find-by-id-3';
import { save3 } from '../fn/entreprises/save-3';
import { Save3$Params } from '../fn/entreprises/save-3';


/**
 * API pour la gestion des entreprises
 */
@Injectable({ providedIn: 'root' })
export class EntreprisesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save3()` */
  static readonly Save3Path = '/gestiondestock/v1/entreprises/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: Save3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
    return save3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: Save3$Params, context?: HttpContext): Observable<EntrepriseDto> {
    return this.save3$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>): EntrepriseDto => r.body)
    );
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/gestiondestock/v1/entreprises/{idEntreprise}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<EntrepriseDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>): EntrepriseDto => r.body)
    );
  }

  /** Path part for operation `findAll3()` */
  static readonly FindAll3Path = '/gestiondestock/v1/entreprises/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {
    return findAll3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: FindAll3$Params, context?: HttpContext): Observable<Array<EntrepriseDto>> {
    return this.findAll3$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseDto>>): Array<EntrepriseDto> => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/gestiondestock/v1/entreprises/delete/{idEntreprise}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<void> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
