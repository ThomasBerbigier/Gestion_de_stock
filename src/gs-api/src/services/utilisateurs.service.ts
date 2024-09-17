/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changerMotDePasse } from '../fn/utilisateurs/changer-mot-de-passe';
import { ChangerMotDePasse$Params } from '../fn/utilisateurs/changer-mot-de-passe';
import { delete1 } from '../fn/utilisateurs/delete-1';
import { Delete1$Params } from '../fn/utilisateurs/delete-1';
import { findAll1 } from '../fn/utilisateurs/find-all-1';
import { FindAll1$Params } from '../fn/utilisateurs/find-all-1';
import { findByEmail } from '../fn/utilisateurs/find-by-email';
import { FindByEmail$Params } from '../fn/utilisateurs/find-by-email';
import { findById1 } from '../fn/utilisateurs/find-by-id-1';
import { FindById1$Params } from '../fn/utilisateurs/find-by-id-1';
import { save1 } from '../fn/utilisateurs/save-1';
import { Save1$Params } from '../fn/utilisateurs/save-1';
import { UtilisateurDto } from '../models/utilisateur-dto';
import {ChangerMotDePasseUtilisateurDto} from "../models/changer-mot-de-passe-utilisateur-dto";


/**
 * API pour la gestion des utilisateurs
 */
@Injectable({ providedIn: 'root' })
export class UtilisateursService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `changerMotDePasse()` */
  static readonly ChangerMotDePassePath = '/gestiondestock/v1/utilisateurs/update/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changerMotDePasse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changerMotDePasse$Response(params: ChangerMotDePasseUtilisateurDto, context?: HttpContext | undefined): Observable<StrictHttpResponse<UtilisateurDto>> {
    return changerMotDePasse(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changerMotDePasse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changerMotDePasse(params: ChangerMotDePasseUtilisateurDto, context?: HttpContext): Observable<UtilisateurDto> {
    return this.changerMotDePasse$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `save1()` */
  static readonly Save1Path = '/gestiondestock/v1/utilisateurs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: Save1$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return save1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: Save1$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.save1$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `findByEmail()` */
  static readonly FindByEmailPath = '/gestiondestock/v1/utilisateurs/find/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail$Response(params: string, context?: HttpContext | undefined): Observable<StrictHttpResponse<UtilisateurDto>> {
    return findByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail(params: string, context?: HttpContext): Observable<UtilisateurDto> {
    return this.findByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/gestiondestock/v1/utilisateurs/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<UtilisateurDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>): Array<UtilisateurDto> => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
