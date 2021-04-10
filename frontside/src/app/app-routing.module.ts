import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildYourLexusComponent } from './components/build-your-lexus/build-your-lexus.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent}, 
  {path: 'build-your-lexus', component: BuildYourLexusComponent},
  {path: 'dealers'},
  {path: 'offers'},
  {path: 'sedans'},
  {path: 'sedans/:id'},
  {path: 'sedans/:id/overview'},
  {path: '**'}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
