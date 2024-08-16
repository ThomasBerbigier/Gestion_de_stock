import {Component, EventEmitter, OnInit, Output, output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faInfo, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-client-fournisseur',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrl: './nouveau-client-fournisseur.component.scss'
})
export class NouveauClientFournisseurComponent implements OnInit {

  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

  saveClick(): void {

  }

  cancelClick(): void {
    if(this.origin === 'client') {
      this.router.navigate(['clients'])
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs'])
    }
  }
}
