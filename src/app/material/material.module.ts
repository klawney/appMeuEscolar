import { NgModule } from '@angular/core';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {MatIconModule} from '@angular/material/icon';
import * as material from '@angular/material';
// import {MatNativeDateModule} from '@angular/material';

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
    material.MatPaginatorModule,
    material.MatFormFieldModule,
    material.MatRadioModule,
    material.MatSelectModule,
    material.MatDatepickerModule,
    material.MatNativeDateModule,
    material.MatInputModule

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
    material.MatPaginatorModule,
    material.MatFormFieldModule,
    material.MatRadioModule,
    material.MatSelectModule,
    material.MatDatepickerModule,
    material.MatNativeDateModule,
    material.MatInputModule

  ]
})
export class MaterialModule { }
