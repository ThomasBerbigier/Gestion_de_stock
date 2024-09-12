/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VentesDto } from '../../models/ventes-dto';

export interface FindByCode$Params {
  codeVentes: string;
}

export function findByCode(http: HttpClient, rootUrl: string, params: FindByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
  const rb = new RequestBuilder(rootUrl, findByCode.PATH, 'get');
  if (params) {
    rb.path('codeVentes', params.codeVentes, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<VentesDto>;
    })
  );
}

findByCode.PATH = '/gestiondestock/v1/ventes/{codeVentes}';
