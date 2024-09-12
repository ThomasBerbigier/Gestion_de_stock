/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategorieDto } from '../../models/categorie-dto';

export interface Save7$Params {
      body: CategorieDto
}

export function save7(http: HttpClient, rootUrl: string, params: Save7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieDto>> {
  const rb = new RequestBuilder(rootUrl, save7.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategorieDto>;
    })
  );
}

save7.PATH = '/gestiondestock/v1/categories/create';
