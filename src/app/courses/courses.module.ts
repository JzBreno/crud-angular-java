import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from '../shared/shared.module';
import {AppMaterialModule} from '../shared/app-material/app-material.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CoursesComponent],
  exports: [
    CoursesComponent
  ],
  imports: [MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    SharedModule,
    AppMaterialModule,
    MatIconModule
  ]
})
export class CoursesModule { }
