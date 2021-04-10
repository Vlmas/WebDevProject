import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BuildYourLexusComponent } from './components/build-your-lexus/build-your-lexus.component';
import { DealersComponent } from './components/dealers/dealers.component';
import { SedansComponent } from './components/sedans/sedans.component';
import { SuvsComponent } from './components/suvs/suvs.component';
import { CoupesComponent } from './components/coupes/coupes.component';
import { HybridsComponent } from './components/hybrids/hybrids.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { FutureComponent } from './components/future/future.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OwnersComponent } from './components/owners/owners.component';
import { LCertifiedComponent } from './components/l-certified/l-certified.component';
import { DiveIntoLexusComponent } from './components/dive-into-lexus/dive-into-lexus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BuildYourLexusComponent,
    DealersComponent,
    SedansComponent,
    SuvsComponent,
    CoupesComponent,
    HybridsComponent,
    PerformanceComponent,
    FutureComponent,
    NotFoundComponent,
    OwnersComponent,
    LCertifiedComponent,
    DiveIntoLexusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
