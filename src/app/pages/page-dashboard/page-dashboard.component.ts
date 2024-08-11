import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MenuComponent} from "../../composants/menu/menu.component";

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {

}
