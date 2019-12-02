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
   34.900,false,new Date(2019,5,15),20,
    'En achetant ce produit vous pouvez obtenir 3 points. Votre panier vous rapportera 3 points qui peuvent être converti en un bon de réduction de 1,500 TND.'),
    new Article('crayons yeux "KAJAL BLACK 2019" ARTDECO','e4s8','../assets/a.jpg',
    18.900,true,new Date(2019,5,15),8,
    'En achetant ce produit vous pouvez obtenir 1 point. Votre panier vous rapportera 1 point qui peuvent être converti en un bon de réduction de 0,500 TND.'),
    new Article('HUDA BEAUTY Life Liner Double Ended Eyeliner Liquid & Pencil','e5d4','../assets/h.jpg',
   78.800,true,new Date(2019,5,15),15,
    'En achetant ce produit vous pouvez obtenir 7 points. Votre panier vous rapportera 7 points qui peuvent être converti en un bon de réduction de 3,500 TND.')

  ];
  
  public getProduitById(id:string){
    for (let i=0;i<this.lesArticles.length;i++)
    if(this.lesArticles[i].id==id)
    return this.lesArticles[i];
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
  
  
   
   
 public modifier(index:number){
  this.lesArticles[index].prix=this.lesArticles[index].prix-this.lesArticles[index].prix*0.2;

 }

public livrer(n:number){
  
  for(let a of this.lesArticles){
     if(n<=a.qt)
      a.qt-=n;
    else if(n>a.qt){
      console.log("stock");
      a.qt=a.qt;
    }
   if(a.qt===0){a.dispo=false;}
  } 
}
s:number=0;
public rech(){
 
  for(let i=0;i<this.lesArticles.length;i++)
  {
    if(this.lesArticles[i].prix>30)
    this.lesArticles.indexOf;
  }
  return this.lesArticles
}


  constructor() { }
}
