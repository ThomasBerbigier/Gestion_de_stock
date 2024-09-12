/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArticleDto } from '../../models/article-dto';

export interface FindByCodeArticle$Params {
  codeArticle: string;
}

export function findByCodeArticle(http: HttpClient, rootUrl: string, params: FindByCodeArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
  const rb = new RequestBuilder(rootUrl, findByCodeArticle.PATH, 'get');
  if (params) {
    rb.path('codeArticle', params.codeArticle, {"style":"simple","explode":false});
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

findByCodeArticle.PATH = '/gestiondestock/v1/articles/filter/{codeArticle}';
