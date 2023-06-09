import { TestBed } from '@angular/core/testing';

import { LogginservicesService } from './UserServices';

describe('LogginservicesService', () => {
  let service: LogginservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
