/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneratePkUsersService } from './GeneratePkUsers.service';

describe('Service: GeneratePkUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratePkUsersService]
    });
  });

  it('should ...', inject([GeneratePkUsersService], (service: GeneratePkUsersService) => {
    expect(service).toBeTruthy();
  }));
});
