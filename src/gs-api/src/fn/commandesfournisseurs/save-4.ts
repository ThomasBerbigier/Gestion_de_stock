/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeFournisseurDto } from '../../models/commande-fournisseur-dto';

export interface Save4$Params {
      body: CommandeFournisseurDto
}

export function save4(http: HttpClient, rootUrl: string, params: Save4$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, save4.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

save4.PATH = '/gestiondestock/v1/commandesfournisseurs/create';
