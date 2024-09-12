/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategorieDto } from '../../models/categorie-dto';

export interface FindById7$Params {
  idCategorie: number;
}

export function findById7(http: HttpClient, rootUrl: string, params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieDto>> {
  const rb = new RequestBuilder(rootUrl, findById7.PATH, 'get');
  if (params) {
    rb.path('idCategorie', params.idCategorie, {"style":"simple","explode":false});
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

findById7.PATH = '/gestiondestock/v1/categories/{idCategorie}';
