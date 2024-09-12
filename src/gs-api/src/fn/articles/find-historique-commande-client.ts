/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LigneCommandeClientDto } from '../../models/ligne-commande-client-dto';

export interface FindHistoriqueCommandeClient$Params {
  idArticle: number;
}

export function findHistoriqueCommandeClient(http: HttpClient, rootUrl: string, params: FindHistoriqueCommandeClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
  const rb = new RequestBuilder(rootUrl, findHistoriqueCommandeClient.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LigneCommandeClientDto>>;
    })
  );
}

findHistoriqueCommandeClient.PATH = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';
