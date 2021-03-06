import { Component, OnInit, Input } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  Articles:any[];
 
  
  
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.lesArticles;
  }
  
  @Input() nom:String;
  @Input() image:String;
  @Input() id:String;
  @Input() prix:number;
  @Input() dispo:boolean;
  @Input() qt:number;
  
 

onSupp(id:string){
  this.artService.supprimer(id);
}



}
