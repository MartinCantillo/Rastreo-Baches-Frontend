/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAllBachesServiceService } from './GetAllBachesService.service';

describe('Service: GetAllBachesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllBachesServiceService]
    });
  });

  it('should ...', inject([GetAllBachesServiceService], (service: GetAllBachesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
