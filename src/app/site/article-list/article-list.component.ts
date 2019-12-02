import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  Articles:Article[];
  name:string="";
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.lesArticles;
    
  }

}
