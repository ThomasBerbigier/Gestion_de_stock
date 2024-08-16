import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faFileExport, faFileImport, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-boutton-action',
  standalone: true,
  imports: [
    FaIconComponent,
    NgIf
  ],
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.scss'
})
export class BouttonActionComponent {
  protected readonly faFileExport = faFileExport;
  protected readonly faFileImport = faFileImport;
  protected readonly faSquarePlus = faSquarePlus;

  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
}
