import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../Article';
@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  lesArticles:Article[]
  identifiant:string;
  obj:Article;


  constructor(private artService:ArtService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.lesArticles=this.artService.lesArticles;
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }
  onNavigate(){
    this.router.navigate(['site/article-list']);
  }

  msg:string;

  public livrer(n:number){
    this.obj=this.artService.getProduitById(this.identifiant);
    if(n<=this.obj.qt){
      this.obj.qt-=n;
      this.msg="commande fait avec succées";
      if(this.obj.qt===0){this.obj.dispo=false;
      }}
    else if(n>this.obj.qt){
      this.msg="stock insuffissante!";
    }
   
    
  }
  }

