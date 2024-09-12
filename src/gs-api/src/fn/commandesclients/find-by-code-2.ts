/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface FindByCode2$Params {
  codeCommandeClient: string;
}

export function findByCode2(http: HttpClient, rootUrl: string, params: FindByCode2$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, findByCode2.PATH, 'get');
  if (params) {
    rb.path('codeCommandeClient', params.codeCommandeClient, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeClientDto>;
    })
  );
}

findByCode2.PATH = '/gestiondestock/v1/commandesclients/{codeCommandeClient}';
