/* tslint:disable */
/* eslint-disable */
import { ClientDto } from '../models/client-dto';
export interface CommandeClientDto {
  client?: ClientDto;
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
}
