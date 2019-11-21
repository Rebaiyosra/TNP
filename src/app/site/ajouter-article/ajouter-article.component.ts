import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  Articles:any[]
 
  
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.articles;
  }
 onAdd(nom:string,id:string,image:string,prix:number,disponiblité:boolean){
   this.artService.ajouterArtcile(nom,id,image,prix,disponiblité);
 }

}
