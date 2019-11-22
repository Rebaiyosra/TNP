import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './site/article-list/article-list.component';
import { ArticleComponent } from './site/article/article.component';
import { AuthentifierComponent } from './site/authentifier/authentifier.component';
import { AjouterArticleComponent } from './site/ajouter-article/ajouter-article.component';
import { DetailArticleComponent } from './site/detail-article/detail-article.component';
import { ErreurComponent } from './site/erreur/erreur.component';
import { ArtPipe } from './art.pipe';

const routes:Routes=[
  {path:'article-list' ,component:ArticleListComponent},
  {path:'ajouter-article',component:AjouterArticleComponent},
  {path:'article-list/:id',component:DetailArticleComponent},
  {path:'authentifier',component:AuthentifierComponent},
  {path:'',redirectTo:'article-list', pathMatch:'full'},
  {path:'**',component:ErreurComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
