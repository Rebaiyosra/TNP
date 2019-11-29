import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  Articles:Article[];
  nom:string;
  id:string;
  image:string;
  prix:number;
  dispo:boolean;
  date:Date;
  desc:string
  qt:number;
  
  constructor(private artService:ArtService,private router:Router) { }
 
  ngOnInit() {
    this.Articles=this.artService.lesArticles;
  }
  onAdd(f:NgForm){
    this.artService.addArticle(this.id,this.nom,this.image,this.prix,this.dispo,this.date,this.qt,this.desc);
  }
 

onNavigate(){
  this.router.navigate(['site/article-list']);
}
}
