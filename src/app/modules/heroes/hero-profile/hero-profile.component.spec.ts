import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../../services/heroes.service';
import { HeroProfileComponent } from './hero-profile.component';
import { Location } from '@angular/common';

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  let teste: HeroProfileComponent;
  let route: ActivatedRoute;
  let heroService: HeroesService;
  let _location: Location;

  beforeEach(async () => {
    teste = new HeroProfileComponent(route, heroService, _location);
    await TestBed.configureTestingModule({
      declarations: [ HeroProfileComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
    ],
    providers: [HeroesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
