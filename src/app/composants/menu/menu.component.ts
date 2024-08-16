import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {Menu} from "./menu";
import {NgClass, NgForOf} from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartLine,
  faEye,
  faChartSimple,
  faTag,
  faBarcode,
  faArrowRightArrowLeft,
  faUser,
  faCircleUser,
  faTruckFast,
  faHandshake,
  faAddressBook,
  faBusinessTime,
  faGear,
  faList,
  faGears
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    NgForOf,
    FontAwesomeModule,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  protected readonly faChartLine = faChartLine;
  protected readonly faEye = faEye;
  protected readonly faChartSimple = faChartSimple;
  protected readonly faTag = faTag;
  protected readonly faBarcode = faBarcode;
  protected readonly faArrowRightArrowLeft = faArrowRightArrowLeft;
  protected readonly faUser = faUser;
  protected readonly faCircleUser = faCircleUser;
  protected readonly faTruckFast = faTruckFast;
  protected readonly faHandshake = faHandshake;
  protected readonly faAddressBook = faAddressBook;
  protected readonly faBusinessTime = faBusinessTime;
  protected readonly faGear = faGear;
  protected readonly faList = faList;
  protected readonly faGears = faGears;

  public menuProperties : Array<Menu> = [
    {
    id : '1',
    titre:'Tableau de bord',
    icon: faChartLine,
    url:'',
    sousMenu : [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: faEye,
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: faChartSimple,
        url: 'Statistiques'
      }
      ]
    },
    {
      id : '2',
      titre:'Articles',
      icon: faTag,
      url:'',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: faBarcode,
          url: 'Articles'
        },
        {
          id: '22',
          titre: 'Mouvement de stock',
          icon: faArrowRightArrowLeft,
          url: 'mouvement-stock'
        }
      ]
    },
    {
      id : '3',
      titre:'Clients',
      icon: faUser,
      url:'',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: faCircleUser,
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: faTruckFast,
          url: 'commandesClients'
        }
      ]
    },
    {
      id : '4',
      titre:'Fournisseur',
      icon: faHandshake,
      url:'',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: faAddressBook,
          url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commande fournisseur',
          icon: faBusinessTime,
          url: 'commandesFournisseurs'
        }
      ]
    },
    {
      id : '5',
      titre:'Parametrage',
      icon: faGear,
      url:'',
      sousMenu: [
        {
          id: '51',
          titre: 'Catégorie',
          icon: faList,
          url: 'Categorie'
        },
        {
          id: '52',
          titre: 'Utilisateur',
          icon: faGears,
          url: 'utilisateurs'
        }
      ]
    }
  ];

  private lastSelectedMenu : Menu | undefined;

  constructor(
    private router: Router
  ) {}

  navigate(menu: Menu): void {
    if(this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);

  }
}
