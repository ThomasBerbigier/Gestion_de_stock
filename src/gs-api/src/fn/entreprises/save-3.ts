/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntrepriseDto } from '../../models/entreprise-dto';

export interface Save3$Params {
      body: EntrepriseDto
}

export function save3(http: HttpClient, rootUrl: string, params: Save3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
  const rb = new RequestBuilder(rootUrl, save3.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

save3.PATH = '/gestiondestock/v1/entreprises/create';
