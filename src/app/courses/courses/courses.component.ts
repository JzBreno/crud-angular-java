import {Component, inject, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {CursesService} from '../services/curses.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorDialogComponent} from '../../shared/components/error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // declarando o objeto de CurseService para usar a função que retorna nossos valores
  // coursesService: CursesService;
  courses$: Observable<Course[]>;
  displayedColumns = ['nome', 'categoria'];
  // outras formas de popular variaveis abaixo com subscribe
  coursesSubscribe: Course[] = [];
  // declarando diretamente no contrutor o http que sera usado em services


  constructor(private coursesService: CursesService,
              public dialog: MatDialog) {
    // this.coursesService = new CursesService();
    // atribuindo a nossa variavel os valores que organizamos para seres enviados pelo CursesService
    this.courses$ = this.coursesService.retornaListaDeCursos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao buscar os Cursos!');
          return of([]);
        })
      );
    // atribuindo valor a uma varivel lista de cursos
    this.coursesService.retornaListaDeCursos().subscribe(courses => this.coursesSubscribe = courses);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg, // Ajuste o tamanho do diálogo
      panelClass: 'custom-dialog-container' // Aplica a classe personalizada

    });
  }

  ngOnInit() {
  }


}
