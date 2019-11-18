import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  articles=[
    {nom:'palette fard à paupière "sophyx extra spice" revolution make up', id: 'e7f8', image: '../assets/p.jpg', prix:50, disponiblité:true},
    {nom:'mascara "curling" artdeco',id:'f1d2',image:'../assets/m.jpg',prix:70,disponiblité:false},
    {nom:'crayons yeux "KAJAL BLACK 2019" ARTDECO',id:'e4s8',image:'../assets/a.jpg',prix:120,disponiblité:true},
    {nom:'HUDA BEAUTY Life Liner Double Ended Eyeliner Liquid & Pencil',id:'e5d4',image:'../assets/h.jpg',prix:150,disponiblité:true}

  ];
 ajouterArtcile(nom:string,id:string,image:string,prix:number,disponiblité:boolean){
  this.articles.push({nom ,id,image,prix,disponiblité});
 }
 modifier(prix:number){
  alert("Prix de solde : "+(prix-prix*0.2));
 }
 supprimer(){
  this.articles.pop();
  
 }
 onDetails(nom:string,id:string){
  if(nom=='T-shirt'){
    console.log (id);
  }
}
  constructor() { }
}
