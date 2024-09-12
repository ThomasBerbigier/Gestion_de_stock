/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LigneCommandeFournisseurDto } from '../../models/ligne-commande-fournisseur-dto';

export interface FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params {
  idCommande: number;
}

export function findAllLignesCommandesFournisseurByCommandeFournisseurId(http: HttpClient, rootUrl: string, params: FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllLignesCommandesFournisseurByCommandeFournisseurId.PATH, 'get');
  if (params) {
    rb.path('idCommande', params.idCommande, {"style":"simple","explode":false});
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

findAllLignesCommandesFournisseurByCommandeFournisseurId.PATH = '/gestiondestock/v1/commandesfournisseurs/lignesCommande/{idCommande}';
