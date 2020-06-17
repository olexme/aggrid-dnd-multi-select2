import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SkyhookDndModule, SkyhookDndService } from '@angular-skyhook/core';
import { SkyhookMultiBackendModule, createDefaultMultiBackend } from '@angular-skyhook/multi-backend';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { Grid } from './grid.component';
import { GridCellComponent } from './grid-cell.component';
import { DropComponent } from './drop.component';
import { RaUiDndPreviewModule } from './ra-ui-dnd-preview/ra-ui-dnd-preview.module';
import { GridDragPreviewService } from './grid-drag-preview-service';
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RaUiDndPreviewModule,
                  SkyhookMultiBackendModule,
                  SkyhookDndModule.forRoot({ backendFactory: createDefaultMultiBackend }),
                  AgGridModule.withComponents([GridCellComponent]) ],
  declarations: [ AppComponent, Grid, GridCellComponent, DropComponent],
  bootstrap:    [ AppComponent ],
  providers: [ SkyhookDndService, GridDragPreviewService ]
})
export class AppModule { }
