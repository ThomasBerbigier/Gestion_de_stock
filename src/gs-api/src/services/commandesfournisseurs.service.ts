/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { delete4 } from '../fn/commandesfournisseurs/delete-4';
import { Delete4$Params } from '../fn/commandesfournisseurs/delete-4';
import { deleteArticle } from '../fn/commandesfournisseurs/delete-article';
import { DeleteArticle$Params } from '../fn/commandesfournisseurs/delete-article';
import { findAll4 } from '../fn/commandesfournisseurs/find-all-4';
import { FindAll4$Params } from '../fn/commandesfournisseurs/find-all-4';
import { findAllLignesCommandesFournisseurByCommandeFournisseurId } from '../fn/commandesfournisseurs/find-all-lignes-commandes-fournisseur-by-commande-fournisseur-id';
import { FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params } from '../fn/commandesfournisseurs/find-all-lignes-commandes-fournisseur-by-commande-fournisseur-id';
import { findByCode1 } from '../fn/commandesfournisseurs/find-by-code-1';
import { FindByCode1$Params } from '../fn/commandesfournisseurs/find-by-code-1';
import { findById4 } from '../fn/commandesfournisseurs/find-by-id-4';
import { FindById4$Params } from '../fn/commandesfournisseurs/find-by-id-4';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { save4 } from '../fn/commandesfournisseurs/save-4';
import { Save4$Params } from '../fn/commandesfournisseurs/save-4';
import { updateArticle } from '../fn/commandesfournisseurs/update-article';
import { UpdateArticle$Params } from '../fn/commandesfournisseurs/update-article';
import { updateEtatCommande } from '../fn/commandesfournisseurs/update-etat-commande';
import { UpdateEtatCommande$Params } from '../fn/commandesfournisseurs/update-etat-commande';
import { updateFournisseur } from '../fn/commandesfournisseurs/update-fournisseur';
import { UpdateFournisseur$Params } from '../fn/commandesfournisseurs/update-fournisseur';
import { updateQuantiteCommande } from '../fn/commandesfournisseurs/update-quantite-commande';
import { UpdateQuantiteCommande$Params } from '../fn/commandesfournisseurs/update-quantite-commande';


/**
 * API pour la gestion des commandes fournisseurs
 */
@Injectable({ providedIn: 'root' })
export class CommandesfournisseursService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save4()` */
  static readonly Save4Path = '/gestiondestock/v1/commandesfournisseurs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: Save4$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return save4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: Save4$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.save4$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateQuantiteCommande()` */
  static readonly UpdateQuantiteCommandePath = '/gestiondestock/v1/commandesfournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuantiteCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande$Response(params: UpdateQuantiteCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateQuantiteCommande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuantiteCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande(params: UpdateQuantiteCommande$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateQuantiteCommande$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateFournisseur()` */
  static readonly UpdateFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFournisseur()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateFournisseur$Response(params: UpdateFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFournisseur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateFournisseur(params: UpdateFournisseur$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateEtatCommande()` */
  static readonly UpdateEtatCommandePath = '/gestiondestock/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande$Response(params: UpdateEtatCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateEtatCommande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande(params: UpdateEtatCommande$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateEtatCommande$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateArticle()` */
  static readonly UpdateArticlePath = '/gestiondestock/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle$Response(params: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle(params: UpdateArticle$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `findById4()` */
  static readonly FindById4Path = '/gestiondestock/v1/commandesfournisseurs/{idCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return findById4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: FindById4$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.findById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `findByCode1()` */
  static readonly FindByCode1Path = '/gestiondestock/v1/commandesfournisseurs/{codeCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1$Response(params: FindByCode1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return findByCode1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1(params: FindByCode1$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.findByCode1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `findAllLignesCommandesFournisseurByCommandeFournisseurId()` */
  static readonly FindAllLignesCommandesFournisseurByCommandeFournisseurIdPath = '/gestiondestock/v1/commandesfournisseurs/lignesCommande/{idCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllLignesCommandesFournisseurByCommandeFournisseurId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurId$Response(params: FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    return findAllLignesCommandesFournisseurByCommandeFournisseurId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllLignesCommandesFournisseurByCommandeFournisseurId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurId(params: FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params, context?: HttpContext): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLignesCommandesFournisseurByCommandeFournisseurId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeFournisseurDto>>): Array<LigneCommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `findAll4()` */
  static readonly FindAll4Path = '/gestiondestock/v1/commandesfournisseurs/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    return findAll4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: FindAll4$Params, context?: HttpContext): Observable<Array<CommandeFournisseurDto>> {
    return this.findAll4$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandeFournisseurDto>>): Array<CommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/gestiondestock/v1/commandesfournisseurs/delete/{idCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<void> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteArticle()` */
  static readonly DeleteArticlePath = '/gestiondestock/v1/commandesfournisseurs/delete/article/{idCommande}/{idLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle$Response(params: DeleteArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return deleteArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle(params: DeleteArticle$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.deleteArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

}
