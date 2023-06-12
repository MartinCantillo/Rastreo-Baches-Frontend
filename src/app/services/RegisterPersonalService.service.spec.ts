/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterPersonalServiceService } from './RegisterPersonalService.service';

describe('Service: RegisterPersonalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterPersonalServiceService]
    });
  });

  it('should ...', inject([RegisterPersonalServiceService], (service: RegisterPersonalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
