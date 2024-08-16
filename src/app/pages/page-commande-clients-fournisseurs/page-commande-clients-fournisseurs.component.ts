import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../composants/boutton-action/boutton-action.component";
import {
    DetailMouvementStockArticleComponent
} from "../../composants/detail-mouvement-stock-article/detail-mouvement-stock-article.component";
import {DetailMouvementStockComponent} from "../../composants/detail-mouvement-stock/detail-mouvement-stock.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {
  DetailCommandeClientFournisseurComponent
} from "../../composants/detail-commande-client-fournisseur/detail-commande-client-fournisseur.component";
import {DetailCommandeComponent} from "../../composants/detail-commande/detail-commande.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-commande-clients-fournisseurs',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailMouvementStockArticleComponent,
    DetailMouvementStockComponent,
    PaginationComponent,
    DetailCommandeClientFournisseurComponent,
    DetailCommandeComponent
  ],
  templateUrl: './page-commande-clients-fournisseurs.component.html',
  styleUrl: './page-commande-clients-fournisseurs.component.scss'
})
export class PageCommandeClientsFournisseursComponent implements OnInit {

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

  nouvelleCommande(): void {
    if(this.origin === 'clients') {
      this.router.navigate(['nouvelleCommandeClient']);
    } else if (this.origin === 'fournisseurs') {
      this.router.navigate(['nouvelleCommandeFournisseur']);
    }
  }
}
