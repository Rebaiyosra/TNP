import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.css']
})
export class AuthentifierComponent implements OnInit {
  Articles:any[];
  mdp="ahlem";
  constructor(private artService:ArtService,private router: Router) { }
 
  ngOnInit() {
    this.Articles=this.artService.lesArticles;
  }
a:string  ;
  onConnect(mdp1){
    if (this.mdp==mdp1){
      this.router.navigate(['site/article-list']);
    }else return this.a="mot de passe incorrect !";
  }
  

}
