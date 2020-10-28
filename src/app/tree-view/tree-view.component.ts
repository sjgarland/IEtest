/*------------------------------------------------------------------
* app/tree-view/tree-view.component.ts
* Copyright (c) 2019-2020 Stage One Software.  All rights reserved.
*-----------------------------------------------------------------*/

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/** A TreeViewComponent renders the display of the tree view. */
@Component({
  selector: 'tree-view',
  template: require('./tree-view.component.html'),
  styleUrls: ['./tree-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeViewComponent {}

