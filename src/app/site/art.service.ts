import { Injectable } from '@angular/core';
import {Article} from './Article';
@Injectable({
  providedIn: 'root'
})
export class ArtService {
  lesArticles=[
    new Article ('palette fard à paupière "sophyx extra spice" revolution make up', 10,'../assets/p.jpg',50, true),
    new Article ('mascara "curling" artdeco',30,'../assets/m.jpg',70,false),
    new Article ('crayons yeux "KAJAL BLACK 2019" ARTDECO',45,'../assets/a.jpg',120,true),
    new Article ('HUDA BEAUTY Life Liner Double Ended Eyeliner Liquid & Pencil',50,'../assets/h.jpg',150,true)

  ];
  public ajouterArtcile(art:Article){
    this.lesArticles.push(art);}
    
   
 public modifier(index:number){
  this.lesArticles[index].prix=this.lesArticles[index].prix-this.lesArticles[index].prix*0.2;
 }
 public supprimer(){
  this.lesArticles.pop();
  
 }
 /*onDetails(nom:string,id:string){
  if(nom=='T-shirt'){
    console.log (id);
  }
}*/
public getDetail(id:number){
  for(let a of this.lesArticles){
    if(a.id===id)
    return a;
  }
}


  constructor() { }
}
