/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FournisseurDto } from '../../models/fournisseur-dto';

export interface Save2$Params {
      body: FournisseurDto
}

export function save2(http: HttpClient, rootUrl: string, params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, save2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

save2.PATH = '/gestiondestock/v1/fournisseurs/create';
