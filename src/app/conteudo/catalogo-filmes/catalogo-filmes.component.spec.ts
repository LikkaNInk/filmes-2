import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoFilmesComponent } from './catalogo-filmes.component';

describe('CatalogoFilmesComponent', () => {
  let component: CatalogoFilmesComponent;
  let fixture: ComponentFixture<CatalogoFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
