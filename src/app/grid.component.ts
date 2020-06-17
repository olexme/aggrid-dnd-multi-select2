import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';
import { GridOptions, SelectionChangedEvent, CellMouseDownEvent, DragStartedEvent} from 'ag-grid-community';
import { GridCellComponent } from './grid-cell.component';
const gridCellCompName = 'gridCellCompName';
import { GridDragPreviewService } from './grid-drag-preview-service';
import {PreviewTemplateContext} from '@angular-skyhook/multi-backend/src/preview.component';
@Component({
    selector: 'grid',
    template: `
        <ag-grid-angular class="ag-theme-balham"
         [gridOptions]="gridOptions"></ag-grid-angular>
    `,
    styleUrls: ['./grid.scss'],
})
export class Grid implements AfterContentInit {
    public gridOptions: GridOptions = {
      frameworkComponents: {[gridCellCompName]: GridCellComponent},
      columnDefs: [
         { headerName: "id", field: "id", width: 90, cellRenderer: gridCellCompName},
         { headerName: "value", field: "value", width: 120, cellRenderer: gridCellCompName },
         { headerName: "value2", field: "value2", width: 120, cellRenderer: gridCellCompName }
      ],
      rowSelection: 'multiple',
      rowData: this.createData()
    };
    private createData() {
      let rowData: any[] = [];

        for (let i = 0; i < 15; i++) {
            rowData.push({
                id: "id_" + i,
                value: i,
                value2: Number(Math.random()).toFixed(2)
            });
        }

        return rowData;
    }

  constructor(private gridPrevService: GridDragPreviewService) {}

  @ContentChild('dndGridPrev', {static: true}) dndTemplateRef!:TemplateRef<PreviewTemplateContext>;

  ngAfterContentInit() {
    this.gridPrevService.registerDnDTemplate(this.dndTemplateRef);
  }
}