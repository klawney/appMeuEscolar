import { NgModule } from '@angular/core';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {MatIconModule} from '@angular/material/icon';
import * as material from '@angular/material';

@NgModule({
  imports: [
    material.MatButtonModule,
    material.MatCheckboxModule,
    material.MatIconModule,
    material.MatToolbarModule,
    material.MatMenuModule,
    material.MatSidenavModule,
    material.MatTableModule,
    material.MatSortModule,
    material.MatPaginatorModule
  ],
  exports: [
    material.MatButtonModule,
    material.MatCheckboxModule,
    material.MatIconModule,
    material.MatToolbarModule,
    material.MatMenuModule,
    material.MatSidenavModule,
    material.MatSortModule,
    material.MatTableModule,
    material.MatPaginatorModule
  ]
})
export class MaterialModule { }
