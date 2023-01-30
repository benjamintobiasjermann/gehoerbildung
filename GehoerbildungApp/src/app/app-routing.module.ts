import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiktatComponent } from './diktat/diktat.component';
import { HarmonischesHoerenComponent } from './harmonisches-hoeren/harmonisches-hoeren.component';
  import { StufendiktateLeitereigenComponent } from './stufendiktate-leitereigen/stufendiktate-leitereigen.component';
  import { StufendiktateVVComponent } from './stufendiktate-v-v/stufendiktate-v-v.component';
  import { StufendiktateVIiComponent } from './stufendiktate-v-ii/stufendiktate-v-ii.component';
  import { StufendiktateVViComponent } from './stufendiktate-v-vi/stufendiktate-v-vi.component';
  import { StufendiktateVIvComponent } from './stufendiktate-v-iv/stufendiktate-v-iv.component';
  import { StufendiktateVXComponent } from './stufendiktate-v-x/stufendiktate-v-x.component';
  import { StufendiktateNComponent } from './stufendiktate-n/stufendiktate-n.component';
  import { StufendiktateUeComponent } from './stufendiktate-ue/stufendiktate-ue.component';
  import { StufendiktateVerschiedenesComponent } from './stufendiktate-verschiedenes/stufendiktate-verschiedenes.component';import { MelodischesHoerenComponent } from './melodisches-hoeren/melodisches-hoeren.component';
import { IntervallischesHoerenComponent } from './intervallisches-hoeren/intervallisches-hoeren.component';
import { RhythmischesHoerenComponent } from './rhythmisches-hoeren/rhythmisches-hoeren.component';
import { SatzmodelleComponent } from './satzmodelle/satzmodelle.component';
import { HoeranalyseComponent } from './hoeranalyse/hoeranalyse.component';
import { KurseComponent } from './kurse/kurse.component';
import { StartseiteComponent } from './startseite/startseite.component';


const routes: Routes = [
  { path: '', component: StartseiteComponent, pathMatch: 'full' },
  { path: 'kurse', component: KurseComponent },
  { path: 'diktate/:diktatId', component: DiktatComponent },
  { path: 'diktate', component: DiktatComponent },
  { path: 'harmonisches-hoeren', component: HarmonischesHoerenComponent},
    {path: 'stufendiktate-leitereigen', component: StufendiktateLeitereigenComponent},
    {path: 'stufendiktate-v-v', component: StufendiktateVVComponent},
    {path: 'stufendiktate-v-ii', component: StufendiktateVIiComponent},
    {path: 'stufendiktate-v-vi', component: StufendiktateVViComponent},
    {path: 'stufendiktate-v-iv', component: StufendiktateVIvComponent},
    {path: 'stufendiktate-v-x', component: StufendiktateVXComponent},
    {path: 'stufendiktate-n', component: StufendiktateNComponent},
    {path: 'stufendiktate-ue', component: StufendiktateUeComponent},
    {path: 'stufendiktate-verschiedenes', component: StufendiktateVerschiedenesComponent},
  { path: 'melodisches-hoeren', component: MelodischesHoerenComponent},
  { path: 'intervallisches-hoeren', component: IntervallischesHoerenComponent},
  { path: 'rhythmisches-hoeren', component: RhythmischesHoerenComponent},
  { path: 'satzmodelle', component: SatzmodelleComponent},
  { path: 'hoeranalyse', component: HoeranalyseComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
