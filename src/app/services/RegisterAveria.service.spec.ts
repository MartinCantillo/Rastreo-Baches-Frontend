/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterAveriaService } from './RegisterAveria.service';

describe('Service: RegisterAveria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterAveriaService]
    });
  });

  it('should ...', inject([RegisterAveriaService], (service: RegisterAveriaService) => {
    expect(service).toBeTruthy();
  }));
});
