import { TestBed } from '@angular/core/testing';

import { CronosUIService } from './cronos-ui.service';

describe('CronosUIService', () => {
  let service: CronosUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronosUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
