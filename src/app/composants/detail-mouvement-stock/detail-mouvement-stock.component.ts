import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCalendarDays, faCartShopping, faUser, faBoxesStacked} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-mouvement-stock',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './detail-mouvement-stock.component.html',
  styleUrl: './detail-mouvement-stock.component.scss'
})
export class DetailMouvementStockComponent {
  protected readonly faCalendarDays = faCalendarDays;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faUser = faUser;
  protected readonly faBoxesStacked = faBoxesStacked;
}
