/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArticleDto } from '../../models/article-dto';

export interface FindById8$Params {
  idArticle: number;
}

export function findById8(http: HttpClient, rootUrl: string, params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
  const rb = new RequestBuilder(rootUrl, findById8.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ArticleDto>;
    })
  );
}

findById8.PATH = '/gestiondestock/v1/articles/{idArticle}';
