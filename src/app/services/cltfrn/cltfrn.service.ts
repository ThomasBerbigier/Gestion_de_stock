import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ClientsService} from "../../../gs-api/src/services/clients.service";
import {FournisseursService} from "../../../gs-api/src/services/fournisseurs.service";
import {Observable, of} from "rxjs";
import {ClientDto, FournisseurDto} from '../../../gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class CltfrnService {

  constructor(
    private userService: UserService,
    private clientService: ClientsService,
    private fournisseurService: FournisseursService
  ) {
  }

  enregistrerClient(clientDto: ClientDto): Observable<ClientDto> {
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.save6(clientDto);
  }

  enregistrerFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.fournisseurService.save2(fournisseurDto);
  }

  findAllClients(): Observable<ClientDto[]> {
    return this.clientService.findAll6();
  }

  findAllFournisseurs(): Observable<FournisseurDto[]> {
    return this.fournisseurService.findAll2();
  }

  findClientById(id: number): Observable<ClientDto> {
    if(id) {
      return this.clientService.findById6(id);
    }
    return of();
  }

  findFournisseurById(id: number): Observable<FournisseurDto> {
    if(id) {
      return this.fournisseurService.findById2(id);
    }
    return of();
  }

  deleteClient(idClient: number): Observable<any> {
    if(idClient) {
      return this.clientService.deleteById({idClient});
    }
    return of();
  }

  deleteFournisseur(idFournisseur: number): Observable<any> {
    if(idFournisseur) {
      return this.fournisseurService.delete2({idFournisseur});
    }
    return of();
  }
}
