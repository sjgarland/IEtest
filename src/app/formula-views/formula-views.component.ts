/*------------------------------------------------------------------
* app/formula-views/formula-views.component.ts
* Copyright (c) 2020 Stage One Software.  All rights reserved.
*-----------------------------------------------------------------*/

import { Component, Inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

/** A FormulaViewsComponent is a wrapper the three formula views. */
@Component({
    selector: 'formula-views',
    template: require('./formula-views.component.html'),
    styleUrls: []
})
export class FormulaViewsComponent {
 
    /** Visibility of the views (0 = text, 1 = math, 2 = tree). */
    public isVisible = [true, true, true];
    
    /** Visibility icons for the titles of the views. */
    public triangle = ['▼', '▼', '▼'];
    
    /** Toggles the visibility of a view. */
    private toggleVisibility(n: number) {
        this.isVisible[n] = !this.isVisible[n];
        this.triangle[n] = this.isVisible[n] ? '▼' :'▲';
        // Trigger Angular change detection
        this.isVisible = this.isVisible.slice();
        this.triangle = this.triangle.slice();
    }
    
    
}
