import { Injectable } from '@angular/core';
import {Article} from './Article';
@Injectable({
  providedIn: 'root'
})
export class ArtService {
  lesArticles=[
    {nom:'palette fard à paupière "sophyx extra spice" revolution make up', id: 'e7f8', image: '../assets/p.jpg', 
    prix:48.9, dispo:true,date:new Date(2019,5,15),qt:10,
    desc:'En achetant ce produit vous pouvez obtenir 4 points. Votre panier vous rapportera 4 points qui peuvent être converti en un bon de réduction de 2,000 TND.'},
    {nom:'mascara "curling" artdeco',id:'f1d2',image:'../assets/m.jpg',
    prix:34.900,dispo:false,date:new Date(2019,5,15),qt:20,
    desc:'En achetant ce produit vous pouvez obtenir 3 points. Votre panier vous rapportera 3 points qui peuvent être converti en un bon de réduction de 1,500 TND.'},
    {nom:'crayons yeux "KAJAL BLACK 2019" ARTDECO',id:'e4s8',image:'../assets/a.jpg',
    prix:18.900,dispo:true,date:new Date(2019,5,15),qt:8,
    desc:'En achetant ce produit vous pouvez obtenir 1 point. Votre panier vous rapportera 1 point qui peuvent être converti en un bon de réduction de 0,500 TND.'},
    {nom:'HUDA BEAUTY Life Liner Double Ended Eyeliner Liquid & Pencil',id:'e5d4',image:'../assets/h.jpg',
    prix:78.800,dispo:true,date:new Date(2019,5,15),qt:15,
    desc:'En achetant ce produit vous pouvez obtenir 7 points. Votre panier vous rapportera 7 points qui peuvent être converti en un bon de réduction de 3,500 TND.'}

  ];
  ajouterArtcile(nom:string,id:string,image:string,prix:number,dispo:boolean,date:Date,desc:string,qt:number){
    this.lesArticles.push({nom ,id,image,prix,dispo,date,desc,qt});
   }
    
   
 public modifier(index:number){
  this.lesArticles[index].prix=this.lesArticles[index].prix-this.lesArticles[index].prix*0.2;
 }
 public supprimer(){
  this.lesArticles.pop();
  
 }


public livrer(n:number){
  for(let a of this.lesArticles){
    while(a.qt>0){a.qt-=n;};
    if(a.qt===0){
      a.dispo=false; 
    }
  } 
}
s:number=0;
public rech(){
 
  for(let i=0;i<2;i++)
  {
    if(this.s>this.lesArticles[i].prix)
   this.s++;
  }
  return this.s;
  
}


  constructor() { }
}
