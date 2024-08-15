import {Component, EventEmitter, Output} from '@angular/core';
import {faChevronRight, faFileExport, faFileImport, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-boutton-action',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.scss'
})
export class BouttonActionComponent {
  protected readonly faFileExport = faFileExport;
  protected readonly faFileImport = faFileImport;
  protected readonly faSquarePlus = faSquarePlus;

  @Output()
  clickEvent = new EventEmitter();

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
}
