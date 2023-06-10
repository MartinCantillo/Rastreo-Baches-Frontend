/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPkCiudadanoService } from './GetPkCiudadano.service';

describe('Service: GetPkCiudadano', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPkCiudadanoService]
    });
  });

  it('should ...', inject([GetPkCiudadanoService], (service: GetPkCiudadanoService) => {
    expect(service).toBeTruthy();
  }));
});
