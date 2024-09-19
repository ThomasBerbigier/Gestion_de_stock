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
import {applicationGuard} from "./services/guard/application-guard.service";

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
    canActivate: [applicationGuard],
    children: [
      {
        path: 'Statistiques',
        component: PageStatistiquesComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'Articles',
        component: PageArticleComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'NouvelArticle',
        component: NouvelArticleComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'NouvelArticle/:idArticle',
        component: NouvelArticleComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'mouvement-stock',
        component: PageMouvementStockComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'nouveauClient',
        component: NouveauClientFournisseurComponent,
      canActivate: [applicationGuard],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouveauClient/:id',
        component: NouveauClientFournisseurComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesClients',
        component: PageCommandeClientsFournisseursComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'clients'
        }
      },
      {
        path: 'nouvelleCommandeClient',
        component: NouvelleCommandeClientFournisseurComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'nouveauFournisseur',
        component: NouveauClientFournisseurComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouveauFournisseur/:id',
        component: NouveauClientFournisseurComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'commandesFournisseurs',
        component: PageCommandeClientsFournisseursComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'fournisseurs'
        }
      },
      {
        path: 'nouvelleCommandeFournisseur',
        component: NouvelleCommandeClientFournisseurComponent,
        canActivate: [applicationGuard],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'Categorie',
        component: PageCategoriesComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'nouvelleCategorie',
        component: NouvelleCategorieComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'nouvelleCategorie/:idCategorie',
        component: NouvelleCategorieComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'nouvelUtilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [applicationGuard]
      },
      {
        path: 'changerMotDePasse',
        component: ChangerMotDePasseComponent,
        canActivate: [applicationGuard]
      }
    ]
  }
];
