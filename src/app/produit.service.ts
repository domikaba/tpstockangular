import {Injectable} from '@angular/core';
import {produitsList, Produit} from './produit/produit.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Array<Produit> = produitsList;

  constructor() {
  }

  list() {
    return this.produits;
  }
}
