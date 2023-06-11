/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneratePkCiudadanoService } from './GeneratePkCiudadano.service';

describe('Service: GeneratePkCiudadano', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratePkCiudadanoService]
    });
  });

  it('should ...', inject([GeneratePkCiudadanoService], (service: GeneratePkCiudadanoService) => {
    expect(service).toBeTruthy();
  }));
});
