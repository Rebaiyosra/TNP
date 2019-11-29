import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './site/article-list/article-list.component';
import { ArticleComponent } from './site/article/article.component';
import { AuthentifierComponent } from './site/authentifier/authentifier.component';
import { AjouterArticleComponent } from './site/ajouter-article/ajouter-article.component';
import { ArtPipe } from './art.pipe';
import { MenuComponent } from './site/menu/menu.component';
import { DetailArticleComponent } from './site/detail-article/detail-article.component';
import { ErreurComponent } from './site/erreur/erreur.component';
const routes: Routes = [
  {path:'site/my-menu', component:MenuComponent},
  {path:'site/article-list', component:ArticleListComponent},
  {path:'site/article', component:ArticleComponent},
  {path:'site/ajouter-article', component:AjouterArticleComponent},
  {path:'site/ajouter-article', component:ArticleListComponent},
  {path:'site/authentifier', component:AuthentifierComponent},
  {path:'site/article-list/:id', component:DetailArticleComponent},
  {path:'', redirectTo:'site/authentifier', pathMatch:'full'},
  {path:'**',component:ErreurComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
