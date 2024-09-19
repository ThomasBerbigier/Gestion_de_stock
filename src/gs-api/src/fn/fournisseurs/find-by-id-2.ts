/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FournisseurDto } from '../../models/fournisseur-dto';

export interface FindById2$Params {
  idFournisseur: number;
}

export function findById2(http: HttpClient, rootUrl: string, params: number, context?: HttpContext | undefined): Observable<StrictHttpResponse<FournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, findById2.PATH, 'get');
  if (params) {
    rb.path('idFournisseur', params, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FournisseurDto>;
    })
  );
}

findById2.PATH = '/gestiondestock/v1/fournisseurs/{idFournisseur}';
