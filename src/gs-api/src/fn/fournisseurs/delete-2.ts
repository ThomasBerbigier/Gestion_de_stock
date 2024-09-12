/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Delete2$Params {
  idFournisseur: number;
}

export function delete2(http: HttpClient, rootUrl: string, params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, delete2.PATH, 'delete');
  if (params) {
    rb.path('idFournisseur', params.idFournisseur, {"style":"simple","explode":false});
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

delete2.PATH = '/gestiondestock/v1/fournisseurs/delete/{idFournisseur}';
