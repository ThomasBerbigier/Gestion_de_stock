import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {

}
