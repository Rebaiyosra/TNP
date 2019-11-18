import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './site/article-list/article-list.component';
import { ArticleComponent } from './site/article/article.component';
import { AuthentifierComponent } from './site/authentifier/authentifier.component';
import { AjouterArticleComponent } from './site/ajouter-article/ajouter-article.component';
import { ArtPipe } from './art.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    AuthentifierComponent,
    AjouterArticleComponent,
    ArtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
