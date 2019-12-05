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
  identifiant:number;


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
    for(let a of this.lesArticles){
       if(n<=a.qt){
        a.qt-=n;
        return this.msg="commande fait avec succées";}
      else if(n>a.qt){
        return this.msg="stock insuffissante!";
      }
     if(a.qt===0){a.dispo=false;}
    } 
  }
  }

