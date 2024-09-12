/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface UpdateQuantiteCommande1$Params {
  idCommande: number;
  idLigneCommande: number;
  quantite: number;
}

export function updateQuantiteCommande1(http: HttpClient, rootUrl: string, params: UpdateQuantiteCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, updateQuantiteCommande1.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {"style":"simple","explode":false});
    rb.path('idLigneCommande', params.idLigneCommande, {"style":"simple","explode":false});
    rb.path('quantite', params.quantite, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeClientDto>;
    })
  );
}

updateQuantiteCommande1.PATH = '/gestiondestock/v1/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
