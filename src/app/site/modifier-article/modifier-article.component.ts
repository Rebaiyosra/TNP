import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import {Article} from '../Article';
import {Router, ActivatedRoute} from '@angular/router';

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
    this.modifForm.get('qt').setValue(A.qt);

    this.modifForm.get('desc').setValue(A.desc);
  }
    
  modif()
  {
  

    this.artService.modifier(
    this.modifForm.get('nom').value,
    this.modifForm.get('id').value,
    this.modifForm.get('image').value,
    this.modifForm.get('prix').value,
    this.modifForm.get('dispo').value,
    this.modifForm.get('date').value,
    this.modifForm.get('qt').value,
    this.modifForm.get('desc').value
    )
    this.router.navigate(['site/article-list']);

  }

  
  constructor(private artService:ArtService,private router:Router,private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    
    this.Articles= this.artService.lesArticles;
    this.modifForm = this.formBuilder.group(
      {
        id:['',Validators.required],
        nom:['',Validators.required],
        image:['',Validators.required],
        prix:['',Validators.required],
        date:['',Validators.required],
        dispo:[],
        desc:['',Validators.required],
        qt:['',Validators.required]
      }
      )

  }

  public get id()
  { return this.modifForm.get('id'); }
  public get nom()
  { return this.modifForm.get('nom'); }
  public get image()
  { return this.modifForm.get('image'); }
  public get prix()
  { return this.modifForm.get('prix'); }
  public get date()
  { return this.modifForm.get('date'); }
  public get dispo()
  { return this.modifForm.get('dispo'); }
  public get desc()
  { return this.modifForm.get('nom'); }
  public get qt()
  { return this.modifForm.get('qt'); }

}
