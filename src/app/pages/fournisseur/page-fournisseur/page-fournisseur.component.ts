import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {
    DetailClientFournisseurComponent
} from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
    imports: [
        BouttonActionComponent,
        DetailClientFournisseurComponent,
        PaginationComponent
    ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent {

}
