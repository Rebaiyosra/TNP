import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  Articles:any[]
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.articles;
  }

}
