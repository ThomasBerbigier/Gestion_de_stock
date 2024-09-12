/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientDto } from '../../models/client-dto';

export interface FindById6$Params {
  idClient: number;
}

export function findById6(http: HttpClient, rootUrl: string, params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
  const rb = new RequestBuilder(rootUrl, findById6.PATH, 'get');
  if (params) {
    rb.path('idClient', params.idClient, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ClientDto>;
    })
  );
}

findById6.PATH = '/gestiondestock/v1/clients/{idClient}';
