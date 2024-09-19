import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {
    DetailClientFournisseurComponent
} from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {CltfrnService} from "../../../services/cltfrn/cltfrn.service";
import {FournisseurDto} from "../../../../gs-api/src/models/fournisseur-dto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailClientFournisseurComponent,
    PaginationComponent,
    NgForOf
  ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent implements OnInit {

  listFournisseur: Array<FournisseurDto> = [];

  constructor(
    private router: Router,
    private cltfrnService: CltfrnService,

  ) {}

  ngOnInit(): void {
    this.findAllFournisseurs();
  }

  findAllFournisseurs(): void {
    this.cltfrnService.findAllFournisseurs()
      .subscribe(fournisseurs => {
        this.listFournisseur = fournisseurs;
      });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveauFournisseur'])
  }
}
