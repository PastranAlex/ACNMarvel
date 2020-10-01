import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { HeroesService } from '../../../services/heroes.service';

import {HeroProfileComponent} from '../hero-profile/hero-profile.component'
import {AppComponent} from '../../../app.component'
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;
  // let teste: ListadoDeHeroesComponent;
  // let heroService: HeroesService;
  let heroesService: HeroesService;

  const HEROE_OBJECT ={
    id:'1',
    name:'Spiderman',
    description: 'El hombre que araña',
    modified:new Date(1518417160),
    thumbnail:
    {
    'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
    'extension': 'jpg'
    },
    resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
    teamColor:'yellow'
  };
 
  class HeroServiceMock {
    public teams = new Map().set("1","yellow");

    public getHeroes(){
      return of({data:{results:[HEROE_OBJECT]}}).pipe(delay(1000));
    }

    public getTeamColor(){
      return 'yellow';
    }
  }

  beforeEach(async () => {
    // teste = new ListadoDeHeroesComponent(heroService);
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      declarations: [ 
        ListadoDeHeroesComponent,
        AppComponent,
        HeroProfileComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
    ],
    providers: [
      { provide: ComponentFixtureAutoDetect, useValue: true },
      { provide: HeroesService, useClass: HeroServiceMock }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    heroesService = TestBed.inject(HeroesService);
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia buscar un listado de heroes', () => {
    spyOn(heroesService, 'getHeroes').and.callThrough();
    component.ngOnInit()
    expect(heroesService.getHeroes.length).toBeGreaterThanOrEqual(0);
  });
});
