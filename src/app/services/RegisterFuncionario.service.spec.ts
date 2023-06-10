/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterFuncionarioService } from './RegisterFuncionario.service';

describe('Service: RegisterFuncionario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterFuncionarioService]
    });
  });

  it('should ...', inject([RegisterFuncionarioService], (service: RegisterFuncionarioService) => {
    expect(service).toBeTruthy();
  }));
});
