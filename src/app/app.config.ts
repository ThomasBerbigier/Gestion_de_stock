import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {HttpInterceptorService} from "./services/interceptor/http-interceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    {provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true}
  ]
};
