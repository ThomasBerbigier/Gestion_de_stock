/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntrepriseDto } from '../../models/entreprise-dto';

export interface FindById3$Params {
  idEntreprise: number;
}

export function findById3(http: HttpClient, rootUrl: string, params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
  const rb = new RequestBuilder(rootUrl, findById3.PATH, 'get');
  if (params) {
    rb.path('idEntreprise', params.idEntreprise, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntrepriseDto>;
    })
  );
}

findById3.PATH = '/gestiondestock/v1/entreprises/{idEntreprise}';
