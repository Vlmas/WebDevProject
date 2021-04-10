import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildYourLexusComponent } from './components/build-your-lexus/build-your-lexus.component';
import { CoupesComponent } from './components/coupes/coupes.component';
import { DealersComponent } from './components/dealers/dealers.component';
import { DiveIntoLexusComponent } from './components/dive-into-lexus/dive-into-lexus.component';
import { FutureComponent } from './components/future/future.component';
import { HybridsComponent } from './components/hybrids/hybrids.component';
import { LCertifiedComponent } from './components/l-certified/l-certified.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OwnersComponent } from './components/owners/owners.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { SedansComponent } from './components/sedans/sedans.component';
import { SuvsComponent } from './components/suvs/suvs.component';

const routes: Routes = [
  {path: '', component: MainPageComponent}, 
  {path: 'build-your-lexus', component: BuildYourLexusComponent},
  {path: 'dealers', component: DealersComponent},
  {path: 'sedans', component: SedansComponent},
  {path: 'suvs', component: SuvsComponent},
  {path: 'coupes', component: CoupesComponent},
  {path: 'hybrids', component: HybridsComponent},
  {path: 'performance', component: PerformanceComponent},
  {path: 'future', component: FutureComponent},
  {path: 'owners', component: OwnersComponent},
  {path: 'l-certified', component: LCertifiedComponent},
  {path: 'dive-into-lexus', component: DiveIntoLexusComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
