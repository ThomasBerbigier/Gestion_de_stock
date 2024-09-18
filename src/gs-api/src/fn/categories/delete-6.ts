/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Delete6$Params {
  idCategorie: number;
}

export function delete6(http: HttpClient, rootUrl: string, params: number, context?: HttpContext | undefined): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, delete6.PATH, 'delete');
  if (params) {
    rb.path('idCategorie', params, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

delete6.PATH = '/gestiondestock/v1/categories/delete/{idCategorie}';
