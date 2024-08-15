import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faCheckSquare, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faCheckSquare = faCheckSquare;
}
