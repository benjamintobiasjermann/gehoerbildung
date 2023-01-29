import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartseiteComponent } from './startseite/startseite.component';
import { KurseComponent } from './kurse/kurse.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DiktatComponent } from './diktat/diktat.component';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    KurseComponent,
    PageHeaderComponent,
    DiktatComponent
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
