import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartseiteComponent } from './startseite/startseite.component';
import { KurseComponent } from './kurse/kurse.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DiktatComponent } from './diktat/diktat.component';
import { HarmonischesHoerenComponent } from './kurse/harmonisches-hoeren/harmonisches-hoeren.component';
import { MelodischesHoerenComponent } from './kurse/melodisches-hoeren/melodisches-hoeren.component';
import { IntervallischesHoerenComponent } from './kurse/intervallisches-hoeren/intervallisches-hoeren.component';
import { RhythmischesHoerenComponent } from './kurse/rhythmisches-hoeren/rhythmisches-hoeren.component';
import { StufendiktateLeitereigenComponent } from './kurse/harmonisches-hoeren/stufendiktate-leitereigen/stufendiktate-leitereigen.component';
import { StufendiktateNComponent } from './kurse/harmonisches-hoeren/stufendiktate-n/stufendiktate-n.component';
import { StufendiktateUeComponent } from './kurse/harmonisches-hoeren/stufendiktate-ue/stufendiktate-ue.component';
import { StufendiktateVIiComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-ii/stufendiktate-v-ii.component';
import { StufendiktateVIvComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-iv/stufendiktate-v-iv.component';
import { Hd0200KlavierdiktateComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0200-klavierdiktate/hd0200-klavierdiktate.component';
import { Hd0201MozartStreichquartettKv590Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0201-mozart-streichquartett-kv590/hd0201-mozart-streichquartett-kv590.component';
import { Hd0202HaydnStreichquartettOp766Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0202-haydn-streichquartett-op.76.6/hd0202-haydn-streichquartett-op.76.6.component';
import { Hd0203HaydnSonateHobXVIComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0203-haydn-sonate-hob.xvi/hd0203-haydn-sonate-hob.xvi.component';
import { Hd0204HaydnSymphonieNr103Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0204-haydn-symphonie-nr.103/hd0204-haydn-symphonie-nr.103.component';
import { Hd0205MozartSerenadeKv388Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0205-mozart-serenade-kv388/hd0205-mozart-serenade-kv388.component';
import { Hd0206BeethovenAnDieFerneGeliebteComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0206-beethoven-an-die-ferne-geliebte/hd0206-beethoven-an-die-ferne-geliebte.component';
import { Hd0207BeethovenKlavierkonzertNr5Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0207-beethoven-klavierkonzert-nr5/hd0207-beethoven-klavierkonzert-nr5.component';
import { Hd0208SchubertDerSiegComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0208-schubert-der-sieg/hd0208-schubert-der-sieg.component';
import { Hd0209SchumannFruelingsgrussComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0209-schumann-fruelingsgruss/hd0209-schumann-fruelingsgruss.component';
import { Hd0210SchumannVierHusarenliederComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0210-schumann-vier-husarenlieder/hd0210-schumann-vier-husarenlieder.component';
import { Hd0211SchumannDieHuetteComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0211-schumann-die-huette/hd0211-schumann-die-huette.component';
import { Hd0212HaydnSymphonie68Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0212-haydn-symphonie68/hd0212-haydn-symphonie68.component';
import { Hd0213SchubertStreichquartettD46Component } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0213-schubert-streichquartett-d46/hd0213-schubert-streichquartett-d46.component';
import { StufendiktateVVComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/stufendiktate-v-v.component';
import { StufendiktateVViComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-vi/stufendiktate-v-vi.component';
import { StufendiktateVXComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-x/stufendiktate-v-x.component';
import { StufendiktateVerschiedenesComponent } from './kurse/harmonisches-hoeren/stufendiktate-verschiedenes/stufendiktate-verschiedenes.component';
import { HoeranalyseComponent } from './kurse/hoeranalyse/hoeranalyse.component';
import { DurAusweichungOderDiatonischeModulationComponent } from './kurse/melodisches-hoeren/dur-ausweichung-oder-diatonische-modulation/dur-ausweichung-oder-diatonische-modulation.component';
import { DurLeitereigenComponent } from './kurse/melodisches-hoeren/dur-leitereigen/dur-leitereigen.component';
import { DurLeiterfremdeToeneComponent } from './kurse/melodisches-hoeren/dur-leiterfremde-toene/dur-leiterfremde-toene.component';
import { DurMollAnspruchsvolleDiktateComponent } from './kurse/melodisches-hoeren/dur-moll-anspruchsvolle-diktate/dur-moll-anspruchsvolle-diktate.component';
import { MollAusweichungOderDiatonischeModulationComponent } from './kurse/melodisches-hoeren/moll-ausweichung-oder-diatonische-modulation/moll-ausweichung-oder-diatonische-modulation.component';
import { MollLeitereigenComponent } from './kurse/melodisches-hoeren/moll-leitereigen/moll-leitereigen.component';
import { MollLeiterfremdeToeneComponent } from './kurse/melodisches-hoeren/moll-leiterfremde-toene/moll-leiterfremde-toene.component';
import { VoruebungenComponent } from './kurse/melodisches-hoeren/voruebungen/voruebungen.component';
import { SatzmodelleComponent } from './kurse/satzmodelle/satzmodelle.component';
import { AppComponent } from './app.component';
import { MelodiediktateMitSekundenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-sekunden/melodiediktate-mit-sekunden.component';
import { MelodiediktateMitQuartenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-quarten/melodiediktate-mit-quarten.component';
import { MelodiediktateMitQuintenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-quinten/melodiediktate-mit-quinten.component';
import { MelodiediktateMitTerzenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-terzen/melodiediktate-mit-terzen.component';
import { MelodiediktateMitTritoniComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-tritoni/melodiediktate-mit-tritoni.component';
import { MelodiediktateMitSextenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-sexten/melodiediktate-mit-sexten.component';
import { MelodiediktateMitKleinenSeptenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-kleinen-septen/melodiediktate-mit-kleinen-septen.component';
import { MelodiediktateMitGrossenSeptenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-grossen-septen/melodiediktate-mit-grossen-septen.component';
import { MelodiediktateMitIntervallenBisZurOktaveComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-intervallen-bis-zur-oktave/melodiediktate-mit-intervallen-bis-zur-oktave.component';
import { MelodiediktateMitGrossenIntervallenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-grossen-intervallen/melodiediktate-mit-grossen-intervallen.component';
import { BinaereDiktateMitBetonungDesAckzentstufentaktesComponent } from './kurse/rhythmisches-hoeren/binaere-diktate-mit-betonung-des-ackzentstufentaktes/binaere-diktate-mit-betonung-des-ackzentstufentaktes.component';
import { TernaereDiktateMitBetonungDesAckzentstufentaktesComponent } from './kurse/rhythmisches-hoeren/ternaere-diktate-mit-betonung-des-ackzentstufentaktes/ternaere-diktate-mit-betonung-des-ackzentstufentaktes.component';
import { BinaereDiktateMitSynkopenComponent } from './kurse/rhythmisches-hoeren/binaere-diktate-mit-synkopen/binaere-diktate-mit-synkopen.component';
import { TernaereDiktateMitSynkopenComponent } from './kurse/rhythmisches-hoeren/ternaere-diktate-mit-synkopen/ternaere-diktate-mit-synkopen.component';
import { DiktateMitSchnellenNotenwertenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-schnellen-notenwerten/diktate-mit-schnellen-notenwerten.component';
import { DiktateMitUngeradenTaktartenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-ungeraden-taktarten/diktate-mit-ungeraden-taktarten.component';
import { DiktateMitWechselndenTaktartenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-wechselnden-taktarten/diktate-mit-wechselnden-taktarten.component';
import { DiktateMitValeursAjouteesComponent } from './kurse/rhythmisches-hoeren/diktate-mit-valeurs-ajoutees/diktate-mit-valeurs-ajoutees.component';
import { DiktateMitPolyrhythmenUndpolymetrenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-polyrhythmen-undpolymetren/diktate-mit-polyrhythmen-undpolymetren.component';
import { ZweistimmigeParallelfuehrungComponent } from './kurse/satzmodelle/zweistimmige.parallelfuehrung/zweistimmige.parallelfuehrung.component';
import { SynkopenketteAbwaertsComponent } from './kurse/satzmodelle/synkopenkette-abwaerts/synkopenkette-abwaerts.component';
import { QuintfallSequenzenComponent } from './kurse/satzmodelle/quintfall-sequenzen/quintfall-sequenzen.component';
import { FauxBourdonComponent } from './kurse/satzmodelle/faux-bourdon/faux-bourdon.component';
import { ParallelismusSequenzComponent } from './kurse/satzmodelle/parallelismus-sequenz/parallelismus-sequenz.component';
import { TetrachordModelleComponent } from './kurse/satzmodelle/tetrachord-modelle/tetrachord-modelle.component';
import { SteigendeSequenzenComponent } from './kurse/satzmodelle/steigende-sequenzen/steigende-sequenzen.component';
import { StoppComponent } from './stopp/stopp.component';
import { VoruebungenIntervallischesHoerenComponent } from './kurse/intervallisches-hoeren/voruebungen-intervallisches-hoeren/voruebungen-intervallisches-hoeren.component';
import { VerschiedeneMelodiediktateComponent } from './kurse/intervallisches-hoeren/verschiedene-melodiediktate/verschiedene-melodiediktate.component';
import { Hd0214BrahmsDerVerratComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0214-brahms-der-verrat/hd0214-brahms-der-verrat.component';
import { Hd0215SchubertSchwanengesangKriegersAhnungComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0215-schubert-schwanengesang-kriegers-ahnung/hd0215-schubert-schwanengesang-kriegers-ahnung.component';
;

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
    StufendiktateVerschiedenesComponent,
    Hd0200KlavierdiktateComponent,
    Hd0201MozartStreichquartettKv590Component,
    Hd0202HaydnStreichquartettOp766Component,
    Hd0203HaydnSonateHobXVIComponent,
    Hd0204HaydnSymphonieNr103Component,
    Hd0205MozartSerenadeKv388Component,
    Hd0206BeethovenAnDieFerneGeliebteComponent,
    Hd0207BeethovenKlavierkonzertNr5Component,
    Hd0208SchubertDerSiegComponent,
    Hd0209SchumannFruelingsgrussComponent,
    Hd0210SchumannVierHusarenliederComponent,
    Hd0211SchumannDieHuetteComponent,
    Hd0212HaydnSymphonie68Component,
    Hd0213SchubertStreichquartettD46Component,
    VoruebungenComponent,
    DurLeitereigenComponent,
    MollLeitereigenComponent,
    DurLeiterfremdeToeneComponent,
    MollLeiterfremdeToeneComponent,
    DurAusweichungOderDiatonischeModulationComponent,
    MollAusweichungOderDiatonischeModulationComponent,
    DurMollAnspruchsvolleDiktateComponent,
    MelodiediktateMitSekundenComponent,
    MelodiediktateMitQuartenComponent,
    MelodiediktateMitQuintenComponent,
    MelodiediktateMitTerzenComponent,
    MelodiediktateMitTritoniComponent,
    MelodiediktateMitSextenComponent,
    MelodiediktateMitKleinenSeptenComponent,
    MelodiediktateMitGrossenSeptenComponent,
    MelodiediktateMitIntervallenBisZurOktaveComponent,
    MelodiediktateMitGrossenIntervallenComponent,
    VerschiedeneMelodiediktateComponent,
    BinaereDiktateMitBetonungDesAckzentstufentaktesComponent,
    TernaereDiktateMitBetonungDesAckzentstufentaktesComponent,
    BinaereDiktateMitSynkopenComponent,
    TernaereDiktateMitSynkopenComponent,
    DiktateMitSchnellenNotenwertenComponent,
    DiktateMitUngeradenTaktartenComponent,
    DiktateMitWechselndenTaktartenComponent,
    DiktateMitValeursAjouteesComponent,
    DiktateMitPolyrhythmenUndpolymetrenComponent,
    StoppComponent,
    ZweistimmigeParallelfuehrungComponent,
    SynkopenketteAbwaertsComponent,
    QuintfallSequenzenComponent,
    FauxBourdonComponent,
    ParallelismusSequenzComponent,
    TetrachordModelleComponent,
    SteigendeSequenzenComponent,
    VoruebungenIntervallischesHoerenComponent,
    Hd0214BrahmsDerVerratComponent,
    Hd0215SchubertSchwanengesangKriegersAhnungComponent,
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
