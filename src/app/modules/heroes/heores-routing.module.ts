import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// componentes
import {ListadoDeHeroesComponent} from './listado-de-heroes/listado-de-heroes.component'
import {HeroProfileComponent } from './hero-profile/hero-profile.component'
import { ModalPollComponent } from './modal-poll/modal-poll.component';

const routes: Routes = [
    {path: '', component: ListadoDeHeroesComponent},
    { path: 'modal-poll', component: ModalPollComponent},

    { path: ':id', component: HeroProfileComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HeroesRoutingModule {}