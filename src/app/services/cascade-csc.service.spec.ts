import { TestBed } from '@angular/core/testing';

import { CascadeCSCService } from './cascade-csc.service';

describe('CascadeCSCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CascadeCSCService = TestBed.get(CascadeCSCService);
    expect(service).toBeTruthy();
  });
});
