/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UtilisateurDto } from '../../models/utilisateur-dto';

export interface FindById1$Params {
  idUtilisateur: number;
}

export function findById1(http: HttpClient, rootUrl: string, params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
  const rb = new RequestBuilder(rootUrl, findById1.PATH, 'get');
  if (params) {
    rb.path('idUtilisateur', params.idUtilisateur, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UtilisateurDto>;
    })
  );
}

findById1.PATH = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';
