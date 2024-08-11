import { Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";

export const routes: Routes = [
  {
    path: 'Login',
    component: PageLoginComponent
  },
  {
    path: 'Inscription',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'Statistiques',
        component: PageStatistiquesComponent
      }
    ]
  }
];
