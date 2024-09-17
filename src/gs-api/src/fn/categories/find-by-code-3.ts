/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategorieDto } from '../../models/categorie-dto';

export interface FindByCode3$Params {
  codeCategorie: string;
}

export function findByCode3(http: HttpClient, rootUrl: string, params: FindByCode3$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieDto>> {
  const rb = new RequestBuilder(rootUrl, findByCode3.PATH, 'get');
  if (params) {
    rb.path('codeCategorie', params.codeCategorie, {"style":"simple","explode":false});
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

findByCode3.PATH = '/gestiondestock/v1/categories/code/{codeCategorie}';
