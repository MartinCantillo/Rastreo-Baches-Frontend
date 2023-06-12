/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterFuncionarioServiceService } from './RegisterFuncionarioService.service';

describe('Service: RegisterFuncionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterFuncionarioServiceService]
    });
  });

  it('should ...', inject([RegisterFuncionarioServiceService], (service: RegisterFuncionarioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
