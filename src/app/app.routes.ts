import { Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";

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
      },
      {
        path: 'Articles',
        component: PageArticleComponent
      }
    ]
  }
];
