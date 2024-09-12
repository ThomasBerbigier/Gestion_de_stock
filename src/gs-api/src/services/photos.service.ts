/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { savePhoto } from '../fn/photos/save-photo';
import { SavePhoto$Params } from '../fn/photos/save-photo';


/**
 * API pour la gestion des photos
 */
@Injectable({ providedIn: 'root' })
export class PhotosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `savePhoto()` */
  static readonly SavePhotoPath = '/gestiondestock/v1/save/{id}/{titre}/{context}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePhoto()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePhoto$Response(params: SavePhoto$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return savePhoto(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePhoto$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePhoto(params: SavePhoto$Params, context?: HttpContext): Observable<{
}> {
    return this.savePhoto$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
