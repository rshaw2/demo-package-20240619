import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPackage1Component } from '../../projects/demo-package1/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoPackage1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
