/*------------------------------------------------------------------
* app/app.module.ts
* Copyright 2019-2020 (c) Stage One Software.  All rights reserved.
*-----------------------------------------------------------------*/

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }