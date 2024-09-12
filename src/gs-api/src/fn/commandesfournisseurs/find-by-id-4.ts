/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeFournisseurDto } from '../../models/commande-fournisseur-dto';

export interface FindById4$Params {
  idCommandeFournisseur: number;
}

export function findById4(http: HttpClient, rootUrl: string, params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, findById4.PATH, 'get');
  if (params) {
    rb.path('idCommandeFournisseur', params.idCommandeFournisseur, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeFournisseurDto>;
    })
  );
}

findById4.PATH = '/gestiondestock/v1/commandesfournisseurs/{idCommandeFournisseur}';
