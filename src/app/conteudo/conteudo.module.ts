import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { CatalogoFilmesComponent } from './catalogo-filmes/catalogo-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FormPesquisaComponent } from './catalogo-filmes/form-pesquisa/form-pesquisa.component';

import { FilmesService } from './filmes.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  declarations: [CatalogoFilmesComponent, FilmeCardComponent, FormPesquisaComponent],
  
exports: [

CatalogoFilmesComponent

],
  
providers: [FilmesService]

})
export class ConteudoModule { }
