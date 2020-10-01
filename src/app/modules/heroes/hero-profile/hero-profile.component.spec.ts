import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../../services/heroes.service';
import { HeroProfileComponent } from './hero-profile.component';
import {ModalPollComponent} from '../modal-poll/modal-poll.component'
import {AppComponent} from '../../../app.component'
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';


describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  // let teste: HeroProfileComponent;
  // let route: ActivatedRoute;
  // let heroService: HeroesService;
  // let _location: Location;

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

    public getHeroe(){
      return of({data:{results:HEROE_OBJECT}}).pipe(delay(1000));
    }

    public getTeamColor(id){
      return this.teams.get(id);
    }
  }

  beforeEach(async () => {
    // teste = new HeroProfileComponent(route, heroService, _location);
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      declarations: [ 
        AppComponent,
        ModalPollComponent,
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
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear el heroe', () => {
    spyOn(heroesService, 'getHeroe').and.callThrough();
    component.ngOnInit();
    expect(heroesService.getHeroe).toHaveBeenCalled();
  }); 

  
  it('deberia configurar el equipo', () => {
    spyOn(heroesService, 'getTeamColor').and.callThrough();
    component.heroe = HEROE_OBJECT
    component.getTeam('naranjo');
    expect(heroesService.getTeamColor(component.heroe.id)).toEqual('naranjo');
  });

});
