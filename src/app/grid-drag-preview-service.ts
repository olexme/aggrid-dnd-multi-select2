import {Inject, Injectable, TemplateRef} from '@angular/core';
import {RaUiDndPreviewService} from './ra-ui-dnd-preview/ra-ui-dnd-preview.service';
import {PreviewTemplateContext} from '@angular-skyhook/multi-backend/src/preview.component';
@Injectable()
export class GridDragPreviewService {
  private dndPreviewTemplateRef: TemplateRef<PreviewTemplateContext>;
  constructor(private raUiDndPreview: RaUiDndPreviewService) {
  }

  dragStarts() {
    if (this.dndPreviewTemplateRef) {
      this.raUiDndPreview.setTemplate(this.dndPreviewTemplateRef);
    }
  }

  registerDnDTemplate(tempRef: TemplateRef<PreviewTemplateContext>) {
    this.dndPreviewTemplateRef = tempRef;
  }
}