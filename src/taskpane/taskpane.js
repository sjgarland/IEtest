/*------------------------------------------------------------------------------------------
* taskpane/taskpane.js
* Copyright (c) 2020 Stage One Software.  All rights reserved.
* Copyright (c) Microsoft Corporation. All rights reserved.  Licensed under the MIT license.
*-------------------------------------------------------------------------------------------*/

import 'zone.js'; // Required by Angular to define asynchronous execution contexts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app/app.module';

document.getElementById('loading-msg').innerHTML += '<p>Running taskpane.js</p>';

Office.initialize = reason => {
  document.getElementById('loading-msg').innerHTML += '<p>Office initialized</p>';

  platformBrowserDynamic().bootstrapModule(AppModule).catch(error => console.error(error));
};
