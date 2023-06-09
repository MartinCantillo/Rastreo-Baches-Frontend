/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RciudadanoServicesService } from './RciudadanoServices.service';

describe('Service: RciudadanoServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RciudadanoServicesService]
    });
  });

  it('should ...', inject([RciudadanoServicesService], (service: RciudadanoServicesService) => {
    expect(service).toBeTruthy();
  }));
});
