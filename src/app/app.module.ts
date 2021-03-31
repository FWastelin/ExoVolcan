import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolcanService } from './services/volcan.service';
import { HomeComponent } from './component/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './component/pages/info/info.component';
import { NavComponent } from './component/shared/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VolcanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
