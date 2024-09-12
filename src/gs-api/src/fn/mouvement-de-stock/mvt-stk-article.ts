/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MouvementDeStockDto } from '../../models/mouvement-de-stock-dto';

export interface MvtStkArticle$Params {
  idArticle: number;
}

export function mvtStkArticle(http: HttpClient, rootUrl: string, params: MvtStkArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MouvementDeStockDto>>> {
  const rb = new RequestBuilder(rootUrl, mvtStkArticle.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MouvementDeStockDto>>;
    })
  );
}

mvtStkArticle.PATH = '/gestiondestock/v1/mvtstk/filter/article/{idArticle}';
