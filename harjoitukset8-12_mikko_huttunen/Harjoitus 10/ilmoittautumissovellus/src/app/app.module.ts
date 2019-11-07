import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlmoittautuneetComponent } from './ilmoittautuneet/ilmoittautuneet.component';
import { IlmoittautumislomakeComponent } from './ilmoittautumislomake/ilmoittautumislomake.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IlmoittautuneetComponent,
    IlmoittautumislomakeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
