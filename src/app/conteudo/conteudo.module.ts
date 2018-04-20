import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoFilmesComponent } from './catalogo-filmes/catalogo-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FilmesService } from './filmes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CatalogoFilmesComponent, FilmeCardComponent],
  
exports: [

CatalogoFilmesComponent

],
  
providers: [FilmesService]

})
export class ConteudoModule { }
