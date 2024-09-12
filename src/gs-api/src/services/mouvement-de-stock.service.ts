/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { correctionStockNeg } from '../fn/mouvement-de-stock/correction-stock-neg';
import { CorrectionStockNeg$Params } from '../fn/mouvement-de-stock/correction-stock-neg';
import { correctionStockPos } from '../fn/mouvement-de-stock/correction-stock-pos';
import { CorrectionStockPos$Params } from '../fn/mouvement-de-stock/correction-stock-pos';
import { entreeStock } from '../fn/mouvement-de-stock/entree-stock';
import { EntreeStock$Params } from '../fn/mouvement-de-stock/entree-stock';
import { MouvementDeStockDto } from '../models/mouvement-de-stock-dto';
import { mvtStkArticle } from '../fn/mouvement-de-stock/mvt-stk-article';
import { MvtStkArticle$Params } from '../fn/mouvement-de-stock/mvt-stk-article';
import { sortieStock } from '../fn/mouvement-de-stock/sortie-stock';
import { SortieStock$Params } from '../fn/mouvement-de-stock/sortie-stock';
import { stockReelArticle } from '../fn/mouvement-de-stock/stock-reel-article';
import { StockReelArticle$Params } from '../fn/mouvement-de-stock/stock-reel-article';


/**
 * API pour la gestion des mouvements de stock
 */
@Injectable({ providedIn: 'root' })
export class MouvementDeStockService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sortieStock()` */
  static readonly SortieStockPath = '/gestiondestock/v1/mvtstk/sortie';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sortieStock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sortieStock$Response(params: SortieStock$Params, context?: HttpContext): Observable<StrictHttpResponse<MouvementDeStockDto>> {
    return sortieStock(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sortieStock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sortieStock(params: SortieStock$Params, context?: HttpContext): Observable<MouvementDeStockDto> {
    return this.sortieStock$Response(params, context).pipe(
      map((r: StrictHttpResponse<MouvementDeStockDto>): MouvementDeStockDto => r.body)
    );
  }

  /** Path part for operation `entreeStock()` */
  static readonly EntreeStockPath = '/gestiondestock/v1/mvtstk/entree';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `entreeStock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  entreeStock$Response(params: EntreeStock$Params, context?: HttpContext): Observable<StrictHttpResponse<MouvementDeStockDto>> {
    return entreeStock(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `entreeStock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  entreeStock(params: EntreeStock$Params, context?: HttpContext): Observable<MouvementDeStockDto> {
    return this.entreeStock$Response(params, context).pipe(
      map((r: StrictHttpResponse<MouvementDeStockDto>): MouvementDeStockDto => r.body)
    );
  }

  /** Path part for operation `correctionStockPos()` */
  static readonly CorrectionStockPosPath = '/gestiondestock/v1/mvtstk/correctionpos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `correctionStockPos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockPos$Response(params: CorrectionStockPos$Params, context?: HttpContext): Observable<StrictHttpResponse<MouvementDeStockDto>> {
    return correctionStockPos(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `correctionStockPos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockPos(params: CorrectionStockPos$Params, context?: HttpContext): Observable<MouvementDeStockDto> {
    return this.correctionStockPos$Response(params, context).pipe(
      map((r: StrictHttpResponse<MouvementDeStockDto>): MouvementDeStockDto => r.body)
    );
  }

  /** Path part for operation `correctionStockNeg()` */
  static readonly CorrectionStockNegPath = '/gestiondestock/v1/mvtstk/correctionneg';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `correctionStockNeg()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockNeg$Response(params: CorrectionStockNeg$Params, context?: HttpContext): Observable<StrictHttpResponse<MouvementDeStockDto>> {
    return correctionStockNeg(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `correctionStockNeg$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockNeg(params: CorrectionStockNeg$Params, context?: HttpContext): Observable<MouvementDeStockDto> {
    return this.correctionStockNeg$Response(params, context).pipe(
      map((r: StrictHttpResponse<MouvementDeStockDto>): MouvementDeStockDto => r.body)
    );
  }

  /** Path part for operation `stockReelArticle()` */
  static readonly StockReelArticlePath = '/gestiondestock/v1/mvtstk/stockreel/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stockReelArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockReelArticle$Response(params: StockReelArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return stockReelArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stockReelArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockReelArticle(params: StockReelArticle$Params, context?: HttpContext): Observable<number> {
    return this.stockReelArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `mvtStkArticle()` */
  static readonly MvtStkArticlePath = '/gestiondestock/v1/mvtstk/filter/article/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mvtStkArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  mvtStkArticle$Response(params: MvtStkArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MouvementDeStockDto>>> {
    return mvtStkArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mvtStkArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mvtStkArticle(params: MvtStkArticle$Params, context?: HttpContext): Observable<Array<MouvementDeStockDto>> {
    return this.mvtStkArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MouvementDeStockDto>>): Array<MouvementDeStockDto> => r.body)
    );
  }

}
