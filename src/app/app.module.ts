import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { CatalogoFilmesComponent } from './conteudo/catalogo-filmes/catalogo-filmes.component';
import { ConteudoModule } from './conteudo/conteudo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrincipalModule,
    ConteudoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
