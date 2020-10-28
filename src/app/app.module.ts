/*------------------------------------------------------------------
* app/app.module.ts
* Copyright 2019-2020 (c) Stage One Software.  All rights reserved.
*-----------------------------------------------------------------*/

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormulaViewsComponent } from './formula-views/formula-views.component';
import { TextViewComponent } from './text-view/text-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaViewsComponent,
    TextViewComponent,
    TreeViewComponent
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