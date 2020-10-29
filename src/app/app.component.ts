/*------------------------------------------------------------------
* app/app.component.ts
* Copyright (c) 2019-2020 Stage One Software.  All rights reserved.
*-----------------------------------------------------------------*/

import { Component, AfterViewChecked } from '@angular/core';

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
