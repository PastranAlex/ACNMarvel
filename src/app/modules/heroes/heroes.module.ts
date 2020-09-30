import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroesRoutingModule} from './heores-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';


@NgModule({
  declarations: [ListadoDeHeroesComponent, HeroProfileComponent, ModalPollComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    NgbModule,
    FormsModule
  ],
})
export class HeroesModule { }
