import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-catalogo-filmes',
  templateUrl: './catalogo-filmes.component.html',
  styleUrls: ['./catalogo-filmes.component.css']
})
export class CatalogoFilmesComponent implements OnInit {

  listaFilmes: Filme[] = [];


  constructor(private FilmesService: FilmesService) { }

  ngOnInit() {

    this.FilmesService.getFilmes().subscribe(data => console.log(data['Search'].map(filme => {
      let film = {
        'id': filme.imdbID, 'titulo': filme.Title,
        'ano': filme.Year, 'tipo': filme.Type, 'poster': filme.Poster
      }

      this.listaFilmes.push(film);

    })));
  }

  ApagaFilme(filme: Filme): void {

    this.listaFilmes = this.listaFilmes.filter(item => item.id != filme.id)


  }

}
