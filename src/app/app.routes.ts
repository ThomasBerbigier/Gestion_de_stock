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
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotDePasseComponent} from "./pages/profil/changer-mot-de-passe/changer-mot-de-passe.component";
import {ApplicationGuard} from "./services/guard/application-guard.service";

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
        component: PageStatistiquesComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'Articles',
        component: PageArticleComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'NouvelArticle',
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'mouvement-stock',
        component: PageMouvementStockComponent
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'nouveauClient',
        component: NouveauClientFournisseurComponent,
      canActivate: [ApplicationGuard],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesClients',
        component: PageCommandeClientsFournisseursComponent,
        canActivate: [ApplicationGuard],
        data: {
          origin: 'clients'
        }
      },
      {
        path: 'nouvelleCommandeClient',
        component: NouvelleCommandeClientFournisseurComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'nouveauFournisseur',
        component: NouveauClientFournisseurComponent,
        canActivate: [ApplicationGuard],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'commandesFournisseurs',
        component: PageCommandeClientsFournisseursComponent,
        canActivate: [ApplicationGuard],
        data: {
          origin: 'fournisseurs'
        }
      },
      {
        path: 'nouvelleCommandeFournisseur',
        component: NouvelleCommandeClientFournisseurComponent,
        canActivate: [ApplicationGuard],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'Categorie',
        component: PageCategoriesComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'nouvelleCategorie',
        component: NouvelleCategorieComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'nouvelUtilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuard]
      },
      {
        path: 'changerMotDePasse',
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuard]
      }
    ]
  }
];
