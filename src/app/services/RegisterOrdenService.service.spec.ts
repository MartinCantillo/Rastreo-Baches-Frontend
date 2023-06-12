/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterOrdenServiceService } from './RegisterOrdenService.service';

describe('Service: RegisterOrdenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterOrdenServiceService]
    });
  });

  it('should ...', inject([RegisterOrdenServiceService], (service: RegisterOrdenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
