import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildYourLexusComponent } from './components/build-your-lexus/build-your-lexus.component';
import { CarDistributorComponent } from './components/car-distributor/car-distributor.component';
import { CarComponent } from './components/car/car.component';
import { DiveIntoLexusComponent } from './components/dive-into-lexus/dive-into-lexus.component';
import { FutureComponent } from './components/future/future.component';
import { LCertifiedComponent } from './components/l-certified/l-certified.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', component: MainPageComponent}, 
  {path: 'build-your-lexus', component: BuildYourLexusComponent},
  {path: 'future', component: FutureComponent},
  {path: 'l-certified', component: LCertifiedComponent},
  {path: 'dive-into-lexus', component: DiveIntoLexusComponent},
  {path: 'cars/:carBody', component: CarDistributorComponent},
  {path: 'models/:carId', component: CarComponent},
  {path: 'search/:pattern', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
