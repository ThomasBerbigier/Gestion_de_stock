/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SavePhotoRequest } from '../../models/save-photo-request';

export interface SavePhoto$Params {
  context: string;
  id: number;
  titre: string;
      body?: SavePhotoRequest
}

export function savePhoto(http: HttpClient, rootUrl: string, params: SavePhoto$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, savePhoto.PATH, 'post');
  if (params) {
    rb.path('context', params.context, {"style":"simple","explode":false});
    rb.path('id', params.id, {"style":"simple","explode":false});
    rb.path('titre', params.titre, {"style":"simple","explode":false});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

savePhoto.PATH = '/gestiondestock/v1/save/{id}/{titre}/{context}';
