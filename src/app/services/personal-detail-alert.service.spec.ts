import { TestBed } from '@angular/core/testing';

import { PersonalDetailAlertService } from './personal-detail-alert.service';

describe('PersonalDetailAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalDetailAlertService = TestBed.get(PersonalDetailAlertService);
    expect(service).toBeTruthy();
  });
});
