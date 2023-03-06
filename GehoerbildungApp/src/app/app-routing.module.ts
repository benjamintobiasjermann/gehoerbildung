import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiktatComponent } from './diktat/diktat.component';
import { HarmonischesHoerenComponent } from './kurse/harmonisches-hoeren/harmonisches-hoeren.component';
import { IntervallischesHoerenComponent } from './kurse/intervallisches-hoeren/intervallisches-hoeren.component';
import { RhythmischesHoerenComponent } from './kurse/rhythmisches-hoeren/rhythmisches-hoeren.component';
import { HoeranalyseComponent } from './kurse/hoeranalyse/hoeranalyse.component';
import { KurseComponent } from './kurse/kurse.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { StufendiktateLeitereigenComponent } from './kurse/harmonisches-hoeren/stufendiktate-leitereigen/stufendiktate-leitereigen.component';
import { StufendiktateNComponent } from './kurse/harmonisches-hoeren/stufendiktate-n/stufendiktate-n.component';
import { StufendiktateUeComponent } from './kurse/harmonisches-hoeren/stufendiktate-ue/stufendiktate-ue.component';
import { StufendiktateVIiComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-ii/stufendiktate-v-ii.component';
import { StufendiktateVIvComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-iv/stufendiktate-v-iv.component';
import { StufendiktateVVComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/stufendiktate-v-v.component';
import { StufendiktateVViComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-vi/stufendiktate-v-vi.component';
import { StufendiktateVXComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-x/stufendiktate-v-x.component';
import { StufendiktateVerschiedenesComponent } from './kurse/harmonisches-hoeren/stufendiktate-verschiedenes/stufendiktate-verschiedenes.component';
import { MelodischesHoerenComponent } from './kurse/melodisches-hoeren/melodisches-hoeren.component';
import { SatzmodelleComponent } from './kurse/satzmodelle/satzmodelle.component';
import { StoppComponent } from './stopp/stopp.component';
import { AuthenticationGuardService } from './authentication/authentication-guard.service';
import { ZweistimmigeParallelfuehrungComponent } from './kurse/satzmodelle/zweistimmige.parallelfuehrung/zweistimmige.parallelfuehrung.component';
import { SynkopenketteAbwaertsComponent } from './kurse/satzmodelle/synkopenkette-abwaerts/synkopenkette-abwaerts.component';
import { QuintfallSequenzenComponent } from './kurse/satzmodelle/quintfall-sequenzen/quintfall-sequenzen.component';
import { FauxBourdonComponent } from './kurse/satzmodelle/faux-bourdon/faux-bourdon.component';
import { ParallelismusSequenzComponent } from './kurse/satzmodelle/parallelismus-sequenz/parallelismus-sequenz.component';
import { TetrachordModelleComponent } from './kurse/satzmodelle/tetrachord-modelle/tetrachord-modelle.component';
import { SteigendeSequenzenComponent } from './kurse/satzmodelle/steigende-sequenzen/steigende-sequenzen.component';
import { DurAusweichungOderDiatonischeModulationComponent } from './kurse/melodisches-hoeren/dur-ausweichung-oder-diatonische-modulation/dur-ausweichung-oder-diatonische-modulation.component';
import { DurLeitereigenComponent } from './kurse/melodisches-hoeren/dur-leitereigen/dur-leitereigen.component';
import { DurLeiterfremdeToeneComponent } from './kurse/melodisches-hoeren/dur-leiterfremde-toene/dur-leiterfremde-toene.component';
import { DurMollAnspruchsvolleDiktateComponent } from './kurse/melodisches-hoeren/dur-moll-anspruchsvolle-diktate/dur-moll-anspruchsvolle-diktate.component';
import { MollAusweichungOderDiatonischeModulationComponent } from './kurse/melodisches-hoeren/moll-ausweichung-oder-diatonische-modulation/moll-ausweichung-oder-diatonische-modulation.component';
import { MollLeitereigenComponent } from './kurse/melodisches-hoeren/moll-leitereigen/moll-leitereigen.component';
import { MollLeiterfremdeToeneComponent } from './kurse/melodisches-hoeren/moll-leiterfremde-toene/moll-leiterfremde-toene.component';
import { VoruebungenComponent } from './kurse/melodisches-hoeren/voruebungen/voruebungen.component';
import { MelodiediktateMitGrossenIntervallenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-grossen-intervallen/melodiediktate-mit-grossen-intervallen.component';
import { MelodiediktateMitGrossenSeptenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-grossen-septen/melodiediktate-mit-grossen-septen.component';
import { MelodiediktateMitIntervallenBisZurOktaveComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-intervallen-bis-zur-oktave/melodiediktate-mit-intervallen-bis-zur-oktave.component';
import { MelodiediktateMitKleinenSeptenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-kleinen-septen/melodiediktate-mit-kleinen-septen.component';
import { MelodiediktateMitQuartenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-quarten/melodiediktate-mit-quarten.component';
import { MelodiediktateMitQuintenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-quinten/melodiediktate-mit-quinten.component';
import { MelodiediktateMitSekundenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-sekunden/melodiediktate-mit-sekunden.component';
import { MelodiediktateMitSextenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-sexten/melodiediktate-mit-sexten.component';
import { MelodiediktateMitTerzenComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-terzen/melodiediktate-mit-terzen.component';
import { MelodiediktateMitTritoniComponent } from './kurse/intervallisches-hoeren/melodiediktate-mit-tritoni/melodiediktate-mit-tritoni.component';
import { VerschiedeneMelodiediktateComponent } from './kurse/intervallisches-hoeren/verschiedene-melodiediktate/verschiedene-melodiediktate.component';
import { VoruebungenIntervallischesHoerenComponent } from './kurse/intervallisches-hoeren/voruebungen-intervallisches-hoeren/voruebungen-intervallisches-hoeren.component';
import { BinaereDiktateMitBetonungDesAckzentstufentaktesComponent } from './kurse/rhythmisches-hoeren/binaere-diktate-mit-betonung-des-ackzentstufentaktes/binaere-diktate-mit-betonung-des-ackzentstufentaktes.component';
import { BinaereDiktateMitSynkopenComponent } from './kurse/rhythmisches-hoeren/binaere-diktate-mit-synkopen/binaere-diktate-mit-synkopen.component';
import { DiktateMitPolyrhythmenUndpolymetrenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-polyrhythmen-undpolymetren/diktate-mit-polyrhythmen-undpolymetren.component';
import { DiktateMitSchnellenNotenwertenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-schnellen-notenwerten/diktate-mit-schnellen-notenwerten.component';
import { DiktateMitUngeradenTaktartenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-ungeraden-taktarten/diktate-mit-ungeraden-taktarten.component';
import { DiktateMitValeursAjouteesComponent } from './kurse/rhythmisches-hoeren/diktate-mit-valeurs-ajoutees/diktate-mit-valeurs-ajoutees.component';
import { DiktateMitWechselndenTaktartenComponent } from './kurse/rhythmisches-hoeren/diktate-mit-wechselnden-taktarten/diktate-mit-wechselnden-taktarten.component';
import { TernaereDiktateMitBetonungDesAckzentstufentaktesComponent } from './kurse/rhythmisches-hoeren/ternaere-diktate-mit-betonung-des-ackzentstufentaktes/ternaere-diktate-mit-betonung-des-ackzentstufentaktes.component';
import { TernaereDiktateMitSynkopenComponent } from './kurse/rhythmisches-hoeren/ternaere-diktate-mit-synkopen/ternaere-diktate-mit-synkopen.component';
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
import { Hd0214BrahmsDerVerratComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0214-brahms-der-verrat/hd0214-brahms-der-verrat.component';
import { Hd0215SchubertSchwanengesangKriegersAhnungComponent } from './kurse/harmonisches-hoeren/stufendiktate-v-v/hd0215-schubert-schwanengesang-kriegers-ahnung/hd0215-schubert-schwanengesang-kriegers-ahnung.component';

const routes: Routes = [
  { path: '', component: StartseiteComponent, pathMatch: 'full' },
    { path: 'kurse', component: KurseComponent },
      { path: 'diktate/:diktatId', component: DiktatComponent },
      { path: 'diktate', component: DiktatComponent },
      { path: 'harmonisches-hoeren', component: HarmonischesHoerenComponent},
        {path: 'stufendiktate-leitereigen',
          component: StufendiktateLeitereigenComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-v-v',
          component: StufendiktateVVComponent},
            {path: 'hd0200-klavierdiktate',
              component: Hd0200KlavierdiktateComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0201-mozart-streichquartett-kv590',
              component: Hd0201MozartStreichquartettKv590Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0202-haydn-streichquartett-op.76.6',
              component: Hd0202HaydnStreichquartettOp766Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0203-haydn-sonate-hob.xvi',
              component: Hd0203HaydnSonateHobXVIComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0204-haydn-symphonie-nr.103',
              component: Hd0204HaydnSymphonieNr103Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0205-mozart-serenade-kv388',
              component: Hd0205MozartSerenadeKv388Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0206-beethoven-an-die-ferne-geliebte',
              component: Hd0206BeethovenAnDieFerneGeliebteComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0207-beethoven-klavierkonzert-nr5',
              component: Hd0207BeethovenKlavierkonzertNr5Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0208-schubert-der-sieg',
              component: Hd0208SchubertDerSiegComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0209-schumann-fruelingsgruss',
              component: Hd0209SchumannFruelingsgrussComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0210-schumann-vier-husarenlieder',
              component: Hd0210SchumannVierHusarenliederComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0211-schumann-die-huette',
              component: Hd0211SchumannDieHuetteComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0212-haydn-symphonie68',
              component: Hd0212HaydnSymphonie68Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0213-schubert-streichquartett-d46',
              component: Hd0213SchubertStreichquartettD46Component,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0214-brahms-der-verrat',
              component: Hd0214BrahmsDerVerratComponent,
              canActivate: [AuthenticationGuardService]},
            {path: 'hd0215-schubert-schwanengesang-kriegers-ahnung',
              component: Hd0215SchubertSchwanengesangKriegersAhnungComponent},
        {path: 'stufendiktate-v-ii',
          component: StufendiktateVIiComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-v-vi',
          component: StufendiktateVViComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-v-iv',
          component: StufendiktateVIvComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-v-x',
          component: StufendiktateVXComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-n', 
          component: StufendiktateNComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-ue',
          component: StufendiktateUeComponent,
          canActivate: [AuthenticationGuardService]},
        {path: 'stufendiktate-verschiedenes',
          component: StufendiktateVerschiedenesComponent,
          canActivate: [AuthenticationGuardService]},
      { path: 'melodisches-hoeren',
        component: MelodischesHoerenComponent},
        { path: 'dur-ausweichung-oder-diatonische-modulation',
          component: DurAusweichungOderDiatonischeModulationComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'dur-leitereigen',
          component: DurLeitereigenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'dur-leiterfremde-toene',
          component: DurLeiterfremdeToeneComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'dur-moll-anspruchsvolle-diktate',
          component: DurMollAnspruchsvolleDiktateComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'moll-ausweichung-oder-diatonische-modulation',
          component: MollAusweichungOderDiatonischeModulationComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'moll-leitereigen',
          component: MollLeitereigenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'moll-leiterfremde-toene',
          component: MollLeiterfremdeToeneComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'voruebungen',
          component: VoruebungenComponent,
          canActivate: [AuthenticationGuardService]},
      { path: 'intervallisches-hoeren', component: IntervallischesHoerenComponent},
        { path: 'melodiediktate-mit-grossen-intervallen',
          component: MelodiediktateMitGrossenIntervallenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-grossen-septen',
          component: MelodiediktateMitGrossenSeptenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-intervallen-bis-zur-oktave',
          component: MelodiediktateMitIntervallenBisZurOktaveComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-kleinen-septen', 
          component: MelodiediktateMitKleinenSeptenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-quarten',
          component: MelodiediktateMitQuartenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-quinten',
          component: MelodiediktateMitQuintenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-sekunden',
          component: MelodiediktateMitSekundenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-sexten',
          component: MelodiediktateMitSextenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-terzen',
          component: MelodiediktateMitTerzenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'melodiediktate-mit-tritoni',
          component: MelodiediktateMitTritoniComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'verschiedene-melodiediktate',
          component: VerschiedeneMelodiediktateComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'voruebungen-intervallisches-hoeren',
          component: VoruebungenIntervallischesHoerenComponent,
          canActivate: [AuthenticationGuardService]},
      { path: 'rhythmisches-hoeren', component: RhythmischesHoerenComponent},
        { path: 'binaere-diktate-mit-betonung-des-ackzentstufentaktes',
          component: BinaereDiktateMitBetonungDesAckzentstufentaktesComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'binaere-diktate-mit-synkopen',
          component: BinaereDiktateMitSynkopenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'diktate-mit-polyrhythmen-undpolymetren',
          component: DiktateMitPolyrhythmenUndpolymetrenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'diktate-mit-schnellen-notenwerten',
          component: DiktateMitSchnellenNotenwertenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'diktate-mit-ungeraden-taktarten',
          component: DiktateMitUngeradenTaktartenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'diktate-mit-valeurs-ajoutees',
          component: DiktateMitValeursAjouteesComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'diktate-mit-wechselnden-taktarten',
          component: DiktateMitWechselndenTaktartenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'ternaere-diktate-mit-betonung-des-ackzentstufentaktes',
          component: TernaereDiktateMitBetonungDesAckzentstufentaktesComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'ternaere-diktate-mit-synkopen',
          component: TernaereDiktateMitSynkopenComponent,
          canActivate: [AuthenticationGuardService]},
      { path: 'satzmodelle', component: SatzmodelleComponent},
        { path: 'zweistimmige.parallelfuehrung',
          component: ZweistimmigeParallelfuehrungComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'synkopenkette-abwaerts',
          component: SynkopenketteAbwaertsComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'quintfall-sequenzen',
          component: QuintfallSequenzenComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'faux-bourdon',
          component: FauxBourdonComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'parallelismus-sequenz',
          component: ParallelismusSequenzComponent,
          canActivate: [AuthenticationGuardService]}, 
        { path: 'tetrachord-modelle',
          component: TetrachordModelleComponent,
          canActivate: [AuthenticationGuardService]},
        { path: 'steigende-sequenzen',
          component: SteigendeSequenzenComponent,
          canActivate: [AuthenticationGuardService]},
      { path: 'hoeranalyse', component: HoeranalyseComponent,
      canActivate: [AuthenticationGuardService]},
  { path: 'stopp', component: StoppComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
