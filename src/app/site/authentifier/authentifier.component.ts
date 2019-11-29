import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Article } from '../Article';


@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.css']
})
export class AuthentifierComponent implements OnInit {
  lesArticles:Article[];


  constructor(private artService:ArtService,private router: Router) { }
 
  ngOnInit() {
    this.lesArticles=this.artService.lesArticles;
  }
a:string  ;
pass:string;
  onConnect(f:NgForm){
    if (this.pass=="ahlem"){
      this.router.navigate(['site/article-list']);
    }else return this.a="mot de passe incorrect !";
  }
  

}
