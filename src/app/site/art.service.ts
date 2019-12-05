import { Injectable } from '@angular/core';
import {Article} from './Article';
@Injectable({
  providedIn: 'root'
})
export class ArtService {
  lesArticles=[
    new Article('palette fard à paupière "sophyx extra spice" revolution make up',  'e7f8', '../assets/p.jpg', 48.9, true,
    new Date(2019,5,15),10
    ,'En achetant ce produit vous pouvez obtenir 4 points. Votre panier vous rapportera 4 points qui peuvent être converti en un bon de réduction de 2,000 TND.'),
    new Article('mascara "curling" artdeco','f1d2','../assets/m.jpg',
   34.900,false,new Date(2019,4,15),0,
    'En achetant ce produit vous pouvez obtenir 3 points. Votre panier vous rapportera 3 points qui peuvent être converti en un bon de réduction de 1,500 TND.'),
    new Article('crayons yeux "KAJAL BLACK 2019" ARTDECO','e4s8','../assets/a.jpg',
    18.900,true,new Date(2019,10,16),8,
    'En achetant ce produit vous pouvez obtenir 1 point. Votre panier vous rapportera 1 point qui peuvent être converti en un bon de réduction de 0,500 TND.'),
    new Article('HUDA BEAUTY Life Liner Double Ended Eyeliner Liquid & Pencil','e5d4','../assets/h.jpg',
   78.800,true,new Date(2019,12,1),15,
    'En achetant ce produit vous pouvez obtenir 7 points. Votre panier vous rapportera 7 points qui peuvent être converti en un bon de réduction de 3,500 TND.')

  ];
  
  public getProduitById(id:string){
    for (let i=0;i<this.lesArticles.length;i++)
    {
      if(this.lesArticles[i].id==id)
      return this.lesArticles[i];
    }
    
    return null;

 }
 public addArticle(nom: string,id: string,image: string,prix: number,dispo: boolean, date: Date,qt: number,desc: string){
   if(this.getProduitById(id)==null)
   {
     let A=new Article(id,nom,image,prix,dispo,date,qt,desc)
     this.lesArticles.push(A);
     return true;
   }
   return false;
 }
 public supprimer(ref:string){
   for (let i=0;i<this.lesArticles.length;i++){
   if(ref==this.lesArticles[i].id)
      this.lesArticles.splice(i,1);
    }
      return this.lesArticles;
     
     
   }
  
  
   
   
 public modifier(nom: string,id: string,image: string,prix: number,dispo: boolean, date: Date,qt: number,desc: string){
  let A:Article=this.getProduitById(id);
  A.nom=nom;
  A.image=image;
  A.prix=prix;
  A.dispo=dispo;
  A.date=date;
  A.qt=qt;
  A.desc=desc;
 }

  constructor() { }
}
