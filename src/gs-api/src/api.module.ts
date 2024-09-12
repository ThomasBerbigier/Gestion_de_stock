/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { VentesService } from './services/ventes.service';
import { UtilisateursService } from './services/utilisateurs.service';
import { PhotosService } from './services/photos.service';
import { MouvementDeStockService } from './services/mouvement-de-stock.service';
import { FournisseursService } from './services/fournisseurs.service';
import { EntreprisesService } from './services/entreprises.service';
import { CommandesfournisseursService } from './services/commandesfournisseurs.service';
import { CommandesclientsService } from './services/commandesclients.service';
import { ClientsService } from './services/clients.service';
import { CategoriesService } from './services/categories.service';
import { AuthenticationService } from './services/authentication.service';
import { ArticlesService } from './services/articles.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    VentesService,
    UtilisateursService,
    PhotosService,
    MouvementDeStockService,
    FournisseursService,
    EntreprisesService,
    CommandesfournisseursService,
    CommandesclientsService,
    ClientsService,
    CategoriesService,
    AuthenticationService,
    ArticlesService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
