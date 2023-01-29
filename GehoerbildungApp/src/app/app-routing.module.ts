import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KurseComponent } from './kurse/kurse.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  { path: '', component: StartseiteComponent, pathMatch: 'full' },
  { path: 'kurse', component: KurseComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
