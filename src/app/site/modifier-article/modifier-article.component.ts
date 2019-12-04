import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  Articles:Article[];
  modifForm: FormGroup;
  onChange(valeur:string)
  {
    
    let A:Article=this.artService.getProduitById(valeur);
    this.modifForm.get('nom').setValue(A.nom);
    this.modifForm.get('image').setValue(A.image);
    this.modifForm.get('prix').setValue(A.prix);
    this.modifForm.get('dispo').setValue(A.dispo);
    this.modifForm.get('date').setValue(A.date);
    this.modifForm.get('desc').setValue(A.desc);
  }
  
  modif()
  {
    this.artService.modifier(this.modifForm.get('id').value),
    this.modifForm.get('nom').value,
    this.modifForm.get('image').value,
    this.modifForm.get('prix').value,
    this.modifForm.get('dispo').value,
    this.modifForm.get('date').value,
    this.modifForm.get('desc').value
    
  }
  
  constructor(private artService:ArtService,private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.Articles= this.artService.lesArticles;
    this.modifForm = this.formBuilder.group(
      {
        id:[''],
        nom:[''],
        image:[''],
        prix:[''],
        dispo:[],
        qt:[''],
        desc:['']
      }
      )

  }

}
