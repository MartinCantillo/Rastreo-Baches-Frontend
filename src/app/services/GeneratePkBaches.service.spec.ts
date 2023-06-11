/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneratePkBachesService } from './GeneratePkBaches.service';

describe('Service: GeneratePkBaches', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratePkBachesService]
    });
  });

  it('should ...', inject([GeneratePkBachesService], (service: GeneratePkBachesService) => {
    expect(service).toBeTruthy();
  }));
});
