import { Component, OnInit, Input } from '@angular/core';
import {ArtService} from '../art.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  Articles:any[]
 
  
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.articles;
  }
  
  @Input() nom:String;
  @Input() image:String;
  @Input() id:String;
  @Input() prix:number;
  
 
onModif(prix:number){
  this.artService.modifier(prix);
}
}
