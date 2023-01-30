import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartseiteComponent } from './startseite/startseite.component';
import { KurseComponent } from './kurse/kurse.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DiktatComponent } from './diktat/diktat.component';
import { HarmonischesHoerenComponent } from './harmonisches-hoeren/harmonisches-hoeren.component';
import { MelodischesHoerenComponent } from './melodisches-hoeren/melodisches-hoeren.component';
import { IntervallischesHoerenComponent } from './intervallisches-hoeren/intervallisches-hoeren.component';
import { RhythmischesHoerenComponent } from './rhythmisches-hoeren/rhythmisches-hoeren.component';
import { SatzmodelleComponent } from './satzmodelle/satzmodelle.component';
import { HoeranalyseComponent } from './hoeranalyse/hoeranalyse.component';
import { StufendiktateLeitereigenComponent } from './stufendiktate-leitereigen/stufendiktate-leitereigen.component';
import { StufendiktateVVComponent } from './stufendiktate-v-v/stufendiktate-v-v.component';
import { StufendiktateVIiComponent } from './stufendiktate-v-ii/stufendiktate-v-ii.component';
import { StufendiktateVViComponent } from './stufendiktate-v-vi/stufendiktate-v-vi.component';
import { StufendiktateVIvComponent } from './stufendiktate-v-iv/stufendiktate-v-iv.component';
import { StufendiktateVXComponent } from './stufendiktate-v-x/stufendiktate-v-x.component';
import { StufendiktateNComponent } from './stufendiktate-n/stufendiktate-n.component';
import { StufendiktateUeComponent } from './stufendiktate-ue/stufendiktate-ue.component';
import { StufendiktateVerschiedenesComponent } from './stufendiktate-verschiedenes/stufendiktate-verschiedenes.component';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    KurseComponent,
    PageHeaderComponent,
    DiktatComponent,
    HarmonischesHoerenComponent,
    MelodischesHoerenComponent,
    IntervallischesHoerenComponent,
    RhythmischesHoerenComponent,
    SatzmodelleComponent,
    HoeranalyseComponent,
    StufendiktateLeitereigenComponent,
    StufendiktateVVComponent,
    StufendiktateVIiComponent,
    StufendiktateVViComponent,
    StufendiktateVIvComponent,
    StufendiktateVXComponent,
    StufendiktateNComponent,
    StufendiktateUeComponent,
    StufendiktateVerschiedenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
