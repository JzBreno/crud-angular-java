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
import {FormsModule} from '@angular/forms';
import { CourseFormComponent } from './courses/course-form/course-form.component';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent],
  exports: [
    CoursesComponent, CourseFormComponent
  ],
  imports: [MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    SharedModule,
    AppMaterialModule,
    MatIconModule, FormsModule
  ]
})
export class CoursesModule { }
