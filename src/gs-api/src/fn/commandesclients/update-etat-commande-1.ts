/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface UpdateEtatCommande1$Params {
  idCommande: number;
  etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
}

export function updateEtatCommande1(http: HttpClient, rootUrl: string, params: UpdateEtatCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, updateEtatCommande1.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {"style":"simple","explode":false});
    rb.path('etatCommande', params.etatCommande, {"style":"simple","explode":false});
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

updateEtatCommande1.PATH = '/gestiondestock/v1/commandesclients/update/etat/{idCommande}/{etatCommande}';
