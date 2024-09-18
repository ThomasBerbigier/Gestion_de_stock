import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {CategoriesService} from "../../../gs-api/src/services/categories.service";
import {CategorieDto} from "../../../gs-api/src/models/categorie-dto";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private userService: UserService,
    private categoriesService: CategoriesService,
  ) { }

  enregistrerCategorie(categorieDto: CategorieDto): Observable<CategorieDto> {
    categorieDto.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id;
    return this.categoriesService.save7(categorieDto);
  }

  findAll(): Observable<CategorieDto[]> {
    return this.categoriesService.findAll7();
  }

  findById(idCategorie: number): Observable<CategorieDto> {
    return this.categoriesService.findById7(idCategorie);
  }

  delete(idCategorie?: number): Observable<any> {
    if(idCategorie) {
      return this.categoriesService.delete6(idCategorie);
    }
    return of();
  }
}
