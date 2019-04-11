import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits:Array<Produit>;

  constructor(private produitService:ProduitService){}


  remove(produit){
    let index = produitsList.indexOf(produit);
    produitsList.splice(index, 1);
  }

  add(produit){
    let p = new Produit(produit['nom'],produit['fournisseur'], 'mail', ['pain1', 'orange'], produit['description'], 19, 'co', 4);
    produitsList.push(p);
  }

  ngOnInit() {
    this.produits = this.produitService.list();
  }

}

export class Produit {
  nom: string;
  fournisseur: string;
  emailFournisseur: string;
  ingredient: Array<string>;
  descriptio: string;
  age: number;
  conservation: string;
  prix: number;


  constructor(nom: string, fournisseur: string, emailFournisseur: string, ingredient: Array<string>, descriptio: string, age: number, conservation: string, prix: number) {
    this.nom = nom;
    this.fournisseur = fournisseur;
    this.emailFournisseur = emailFournisseur;
    this.ingredient = ingredient;
    this.descriptio = descriptio;
    this.age = age;
    this.conservation = conservation;
    this.prix = prix;
  }

}
export const produitsList:Array<Produit> = [
  new Produit('Carte graphique', 'fournisaeur', 'emailfourniseur', ['pain1', 'orange'], 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dolore enim fugiat mollitia nihil nisi possimus? Aliquid at deleniti eligendi iste possimus, quisquam totam? Blanditiis distinctio magni tenetur voluptate.\n', 12, 'conservation', 300000),
  new Produit('Casque Audio', 'fournisaeur', 'emailfourniseur', ['pain2', 'orange'], 'descirption', 12, 'conservation', 30),
  new Produit('Souris gaming', 'fournisaeur', 'emailfourniseur', ['pain3', 'orange'], 'descirption', 12, 'conservation', 30),
  new Produit('Watter Cooler', 'fournisaeur', 'emailfourniseur', ['pain4', 'orange'], 'descirption', 12, 'conservation', 30),
  new Produit('Nvidia Titan', 'fournisaeur', 'emailfourniseur', ['pain5', 'orange'], 'descirption', 12, 'conservation', 30)
  ];
