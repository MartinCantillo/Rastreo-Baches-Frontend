/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetBachesService } from './GetBaches.service';

describe('Service: GetBaches', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBachesService]
    });
  });

  it('should ...', inject([GetBachesService], (service: GetBachesService) => {
    expect(service).toBeTruthy();
  }));
});
