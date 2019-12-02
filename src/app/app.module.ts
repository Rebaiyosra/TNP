import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './site/article-list/article-list.component';
import { ArticleComponent } from './site/article/article.component';
import { AuthentifierComponent } from './site/authentifier/authentifier.component';
import { AjouterArticleComponent } from './site/ajouter-article/ajouter-article.component';
import { ArtPipe } from './art.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './site/menu/menu.component';
import { DetailArticleComponent } from './site/detail-article/detail-article.component';
import { ErreurComponent } from './site/erreur/erreur.component';
import { StarPipe } from './star.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    AuthentifierComponent,
    AjouterArticleComponent,
    ArtPipe,
    MenuComponent,
    DetailArticleComponent,
    ErreurComponent,
    StarPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
