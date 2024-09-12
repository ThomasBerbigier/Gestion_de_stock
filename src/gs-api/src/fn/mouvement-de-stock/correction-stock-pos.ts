/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MouvementDeStockDto } from '../../models/mouvement-de-stock-dto';

export interface CorrectionStockPos$Params {
      body: MouvementDeStockDto
}

export function correctionStockPos(http: HttpClient, rootUrl: string, params: CorrectionStockPos$Params, context?: HttpContext): Observable<StrictHttpResponse<MouvementDeStockDto>> {
  const rb = new RequestBuilder(rootUrl, correctionStockPos.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MouvementDeStockDto>;
    })
  );
}

correctionStockPos.PATH = '/gestiondestock/v1/mvtstk/correctionpos';
