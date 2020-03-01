import { TestBed } from '@angular/core/testing';

import { PersonalDetailService } from './personal-detail.service';

describe('PersonalDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalDetailService = TestBed.get(PersonalDetailService);
    expect(service).toBeTruthy();
  });
});
