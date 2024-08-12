import { Component } from '@angular/core';
import {
  faAnglesLeft,
  faAnglesRight,
  faCheckSquare,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
  protected readonly faAnglesLeft = faAnglesLeft;
  protected readonly faAnglesRight = faAnglesRight;

  protected readonly faCheckSquare = faCheckSquare;
}
