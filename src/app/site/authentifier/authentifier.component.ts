import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';
@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.css']
})
export class AuthentifierComponent implements OnInit {
  Articles:Article[]
  mdp="ahlem";
  constructor(private artService:ArtService) { }
 
  ngOnInit() {
    this.Articles=this.artService.lesArticles;
  }

  onConnect(mdp1){
    if (this.mdp==mdp1){
      alert("vous etes connecter");
    }else alert("mot de passe incorrect");
  }
  

}
