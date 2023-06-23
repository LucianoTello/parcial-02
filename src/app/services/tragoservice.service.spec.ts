import { TestBed } from '@angular/core/testing';

import { TragoserviceService } from './tragoservice.service';

describe('TragoserviceService', () => {
  let service: TragoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TragoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
