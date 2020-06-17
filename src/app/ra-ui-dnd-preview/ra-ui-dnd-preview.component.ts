import {ChangeDetectionStrategy, Component, EventEmitter, Output, TemplateRef, ViewEncapsulation} from '@angular/core';
import {RaUiDndPreviewService} from './ra-ui-dnd-preview.service';

/**
 * Context of dnd preview template
 */
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

@Component({
    selector: 'ra-ui-dnd-preview',
    templateUrl: './ra-ui-dnd-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None
})
export class RaUiDndPreviewComponent {
    set _dndTemplateRef(val:TemplateRef<any>) { // tslint:disable-line:no-any
        this.__dndTemplateRef = val;
        this.dndTemplateRefChange.emit(val);
    }
    get _dndTemplateRef():TemplateRef<any> { // tslint:disable-line:no-any
        return this.__dndTemplateRef;
    }
    __dndTemplateRef:TemplateRef<any>; // tslint:disable-line:no-any


    @Output()
    dndTemplateRefChange = new EventEmitter<TemplateRef<any>>(); // tslint:disable-line:no-any

    constructor(private dndPreviewService:RaUiDndPreviewService) {
        this.dndPreviewService.componentRef = this;
    }

    _getTemplateOutletContext(group:string, data:any):IDndPreviewTemplateContext { // tslint:disable-line:no-any
      console.log('_getTemplateOutletContext', group, data);
        return {
            group: group,
            data: data
        };
    }

}