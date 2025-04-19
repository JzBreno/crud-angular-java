import { Injectable } from '@angular/core';
import {Course} from '../model/course';
import {HttpClient} from '@angular/common/http';
import {delay, first, take, tap} from 'rxjs/operators';

// servico é o que organiza o que se deve ser renderizado, ele organiza o que as informações que ele
// usar e mostrar

@Injectable({
  providedIn: 'root'
})
export class CursesService {

  private readonly api = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  retornaListaDeCursos() {
    // assim se cria um requisitor do ajax com hhtp
    // this.httpClient.get<TIPO>(//caminho da requisicao)
    return this.httpClient.get<Course[]>(this.api)
      .pipe(
      first(), // aqui eu restrinjo o uso da comunicação para 1 e depois finalizo essa conexão pode ser o firts()
      delay(500),
      tap(courses => console.log(courses))
    );
  }
}
