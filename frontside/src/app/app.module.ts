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
import { FutureComponent } from './components/future/future.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OwnersComponent } from './components/owners/owners.component';
import { LCertifiedComponent } from './components/l-certified/l-certified.component';
import { DiveIntoLexusComponent } from './components/dive-into-lexus/dive-into-lexus.component';
import { CarComponent } from './components/car/car.component';
import { CarDistributorComponent } from './components/car-distributor/car-distributor.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BuildYourLexusComponent,
    DealersComponent,
    FutureComponent,
    NotFoundComponent,
    OwnersComponent,
    LCertifiedComponent,
    DiveIntoLexusComponent,
    CarComponent,
    CarDistributorComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
