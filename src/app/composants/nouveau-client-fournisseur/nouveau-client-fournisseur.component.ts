import {Component, EventEmitter, OnInit, Output, output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faInfo, faSquarePlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {FormsModule} from "@angular/forms";
import {AdresseDto} from "../../../gs-api/src/models/adresse-dto";
import {CltfrnService} from "../../services/cltfrn/cltfrn.service";
import {FournisseurDto} from "../../../gs-api/src/models/fournisseur-dto";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nouveau-client-fournisseur',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrl: './nouveau-client-fournisseur.component.scss'
})
export class NouveauClientFournisseurComponent implements OnInit {

  protected readonly faInfo = faInfo;
  protected readonly faSquarePlus = faSquarePlus;
  protected readonly faXmark = faXmark;

  origin = '';
  clientFournisseur: any = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cltfrnService: CltfrnService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
    this.findObject();
  }

  findObject(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if(id) {
      if (this.origin === 'client') {
        this.cltfrnService.findClientById(id)
          .subscribe(client => {
            this.clientFournisseur = client;
            this.adresseDto = this.clientFournisseur.adresse;
      });
    } else if (this.origin === 'fournisseur') {
      this.cltfrnService.findFournisseurById(id)
        .subscribe(fournisseur => {
            this.clientFournisseur = fournisseur;
            this.adresseDto = this.clientFournisseur.adresse;
        });
      }
    }
  }

  enregistrer(): void {
    if (this.origin === 'client') {
      this.cltfrnService.enregistrerClient(this.mapToClient())
        .subscribe({
          next: (client) => {
            // Redirection après le succès de l'enregistrement du client
            this.router.navigate(['clients']);
          },
          error: (error) => {
            // Gestion des erreurs
            this.errorMsg = error.error.errors;
          },
          complete: () => {
            // Action à compléter si nécessaire
          }
        });
    } else if (this.origin === 'fournisseur') {
      this.cltfrnService.enregistrerFournisseur(this.mapToFournisseur())
        .subscribe({
          next: (fournisseur) => {
            // Redirection après le succès de l'enregistrement du fournisseur
            this.router.navigate(['fournisseurs']);
          },
          error: (error) => {
            // Gestion des erreurs
            this.errorMsg = error.error.errors;
          },
          complete: () => {
            // Action à compléter si nécessaire
          }
        });
    }
  }


  cancelClick(): void {
    if(this.origin === 'client') {
      this.router.navigate(['clients'])
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs'])
    }
  }

  mapToClient(): ClientDto {
    let clientDto: ClientDto = this.clientFournisseur;
    clientDto.adresse = this.adresseDto;
    return clientDto;
  }

  mapToFournisseur(): FournisseurDto {
    let fournisseurDto: FournisseurDto = this.clientFournisseur;
    fournisseurDto.adresse = this.adresseDto;
    return fournisseurDto;
  }
}
