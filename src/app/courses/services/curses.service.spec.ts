import { TestBed } from '@angular/core/testing';

import { CursesService } from './curses.service';

describe('CursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursesService = TestBed.get(CursesService);
    expect(service).toBeTruthy();
  });
});
