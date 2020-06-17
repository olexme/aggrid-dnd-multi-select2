import {NgModule} from '@angular/core';
import {RaUiDndPreviewComponent} from './ra-ui-dnd-preview.component';
import {SkyhookDndModule} from '@angular-skyhook/core';
import {SkyhookMultiBackendModule} from '@angular-skyhook/multi-backend';
import {CommonModule} from '@angular/common';
import {RaUiDndPreviewService} from './ra-ui-dnd-preview.service';

@NgModule({
    declarations: [
        RaUiDndPreviewComponent
    ],
    imports: [
        CommonModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule
    ],
    exports: [
        RaUiDndPreviewComponent
    ],
    providers: [
        RaUiDndPreviewService
    ]
})

export class RaUiDndPreviewModule {}
