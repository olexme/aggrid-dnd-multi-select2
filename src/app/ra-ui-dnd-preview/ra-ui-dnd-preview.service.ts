import {TemplateRef, Inject, Injectable} from '@angular/core';
import {RaUiDndPreviewComponent} from './ra-ui-dnd-preview.component';
export interface IDndPreviewTemplateContext {
    /**
     * Target group
     */
    group:string;
    /**
     * Data being dragged
     */
    data:any; // tslint:disable-line:no-any
}

/**
 * A service that handles rendering of dnd preview on page.
 */
@Injectable()
export class RaUiDndPreviewService {
    /**
     * References Dnd Preview Component instance.
     */
    set componentRef(val:RaUiDndPreviewComponent) {
        if (this._componentRef && val) {
            console.log('RaUiDndPreviewComponent is present on the page more than once time, there should be only one instance.');
            return;
        }
        this._componentRef = val;
    }

    public setTemplate(tempRef: TemplateRef<any>) {
      if (this._componentRef) {
        this._componentRef._dndTemplateRef = tempRef;
      }
    }

    _getTemplateOutletContext(group:string, data:any):IDndPreviewTemplateContext { // tslint:disable-line:no-any
        return {
            group: group,
            data: data
        };
    }
    private _componentRef:RaUiDndPreviewComponent;

}
