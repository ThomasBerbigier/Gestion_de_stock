/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeFournisseurDto } from '../../models/commande-fournisseur-dto';

export interface UpdateEtatCommande$Params {
  idCommande: number;
  etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
}

export function updateEtatCommande(http: HttpClient, rootUrl: string, params: UpdateEtatCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, updateEtatCommande.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {"style":"simple","explode":false});
    rb.path('etatCommande', params.etatCommande, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeFournisseurDto>;
    })
  );
}

updateEtatCommande.PATH = '/gestiondestock/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}';
