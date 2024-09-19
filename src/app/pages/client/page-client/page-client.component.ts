import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailClientFournisseurComponent
} from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";
import {Router} from "@angular/router";
import {CltfrnService} from "../../../services/cltfrn/cltfrn.service";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailClientFournisseurComponent,
    NgForOf
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent implements OnInit {

  listClient: Array<ClientDto> = [];

  constructor(
    private router: Router,
    private cltfrnService: CltfrnService,
  ) {}

  ngOnInit(): void {
    this.findAllclients();
  }

  findAllclients(): void {
    this.cltfrnService.findAllClients()
      .subscribe(clients => {
        this.listClient = clients;
      });
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauClient'])
  }
}
