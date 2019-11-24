import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';
@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  Articles:any[];

  
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.lesArticles;
  }
  onAdd(nom:string,id:string,image:string,prix:number,dispo:boolean,date:Date,desc:string,qt:number){
    this.artService.ajouterArtcile(nom,id,image,prix,dispo,date,desc,qt);
  }
 
 onRech(){
  this.artService.rech();
}

}
