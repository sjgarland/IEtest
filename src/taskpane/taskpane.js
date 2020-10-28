/*------------------------------------------------------------------------------------------
* taskpane/taskpane.js
* Copyright (c) 2020 Stage One Software.  All rights reserved.
* Copyright (c) Microsoft Corporation. All rights reserved.  Licensed under the MIT license.
*-------------------------------------------------------------------------------------------*/

import 'zone.js'; // Required by Angular to define asynchronous execution contexts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app/app.module';
// BrowserModule needs to be imported only in the root component; it includes CommonModule
// import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

Office.initialize = reason => {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(error => console.error(error));
};
