import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { HeroesService } from '../../../services/heroes.service';

import { ListadoDeHeroesComponent } from './listado-de-heroes.component';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;
  let teste: ListadoDeHeroesComponent;
  let heroService: HeroesService;

  beforeEach(async () => {
    teste = new ListadoDeHeroesComponent(heroService);
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeHeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
    ],
    providers: [HeroesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
