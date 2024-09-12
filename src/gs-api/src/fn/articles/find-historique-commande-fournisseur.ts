/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LigneCommandeFournisseurDto } from '../../models/ligne-commande-fournisseur-dto';

export interface FindHistoriqueCommandeFournisseur$Params {
  idArticle: number;
}

export function findHistoriqueCommandeFournisseur(http: HttpClient, rootUrl: string, params: FindHistoriqueCommandeFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
  const rb = new RequestBuilder(rootUrl, findHistoriqueCommandeFournisseur.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
    })
  );
}

findHistoriqueCommandeFournisseur.PATH = '/gestiondestock/v1/articles/historique/vente/commandefournisseur/{idArticle}';
