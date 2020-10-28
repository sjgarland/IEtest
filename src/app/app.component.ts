/*------------------------------------------------------------------
* app/app.component.ts
* Copyright (c) 2019-2020 Stage One Software.  All rights reserved.
*-----------------------------------------------------------------*/

import { Component, Inject, AfterViewChecked, OnInit, NgZone } from '@angular/core';
// CommonModule supports the use of *ngFor, *ngIf, and Angular directives
import { CommonModule } from '@angular/common';

/** An AppComponent renders the contents of the task pane. */
@Component({
  selector: 'app-home',
  template: require('./app.component.html'),
  styleUrls: [],  // Style defined in taskpane.css
})
export class AppComponent implements AfterViewChecked {
  
  /** Hides the loading message when the view has been constructed. */
  ngAfterViewChecked() {
    let msg = document.getElementById('loading-msg');
    if (msg) { msg.style.display = 'none'; }
  }
  
}
