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
  constructor(private artService:ArtService, private activatedRoute:ActivatedRoute) { }
 
  ngOnInit() {
  
   let ref=Number(this.activatedRoute.snapshot.params['id']);
  this.lesArticles=this.artService.getDetail(ref);
   
  }
 
 
}
