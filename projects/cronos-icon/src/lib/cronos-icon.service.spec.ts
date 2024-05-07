import { TestBed } from '@angular/core/testing';

import { CronosIconService } from './cronos-icon.service';

describe('CronosIconService', () => {
  let service: CronosIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronosIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
