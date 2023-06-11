/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPkUserService } from './GetPkUser.service';

describe('Service: GetPkUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPkUserService]
    });
  });

  it('should ...', inject([GetPkUserService], (service: GetPkUserService) => {
    expect(service).toBeTruthy();
  }));
});
