/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LigneVenteDto } from '../../models/ligne-vente-dto';

export interface FindHistoriqueVentes$Params {
  idArticle: number;
}

export function findHistoriqueVentes(http: HttpClient, rootUrl: string, params: FindHistoriqueVentes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneVenteDto>>> {
  const rb = new RequestBuilder(rootUrl, findHistoriqueVentes.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LigneVenteDto>>;
    })
  );
}

findHistoriqueVentes.PATH = '/gestiondestock/v1/articles/historique/vente/{idArticle}';
