import { Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMouvementStockComponent} from "./pages/mouvement-stock/page-mouvement-stock/page-mouvement-stock.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {
  NouveauClientFournisseurComponent
} from "./composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component";
import {
  PageCommandeClientsFournisseursComponent
} from "./pages/page-commande-clients-fournisseurs/page-commande-clients-fournisseurs.component";
import {
  NouvelleCommandeClientFournisseurComponent
} from "./composants/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {PageCategoriesComponent} from "./pages/categories/page-categories/page-categories.component";
import {NouvelleCategorieComponent} from "./pages/categories/nouvelle-categorie/nouvelle-categorie.component";

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
      },
      {
        path: 'NouvelArticle',
        component: NouvelArticleComponent
      },
      {
        path: 'mouvement-stock',
        component: PageMouvementStockComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      },
      {
        path: 'nouveauClient',
        component: NouveauClientFournisseurComponent
      },
      {
        path: 'commandesClients',
        component: PageCommandeClientsFournisseursComponent
      },
      {
        path: 'nouvelleCommandeClient',
        component: NouvelleCommandeClientFournisseurComponent
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path: 'nouveauFournisseur',
        component: NouveauClientFournisseurComponent
      },
      {
        path: 'commandesFournisseurs',
        component: PageCommandeClientsFournisseursComponent
      },
      {
        path: 'nouvelleCommandeFournisseur',
        component: NouvelleCommandeClientFournisseurComponent
      },
      {
        path: 'Categorie',
        component: PageCategoriesComponent
      },
      {
        path: 'nouvelleCategorie',
        component: NouvelleCategorieComponent
      }
    ]
  }
];
