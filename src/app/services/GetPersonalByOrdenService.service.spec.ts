/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPersonalByOrdenServiceService } from './GetPersonalByOrdenService.service';

describe('Service: GetPersonalByOrdenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPersonalByOrdenServiceService]
    });
  });

  it('should ...', inject([GetPersonalByOrdenServiceService], (service: GetPersonalByOrdenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
