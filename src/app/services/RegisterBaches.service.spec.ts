/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterBachesService } from './RegisterBaches.service';

describe('Service: RegisterBaches', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterBachesService]
    });
  });

  it('should ...', inject([RegisterBachesService], (service: RegisterBachesService) => {
    expect(service).toBeTruthy();
  }));
});
