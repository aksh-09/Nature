import { TestBed } from '@angular/core/testing';

import { CanDeactivatedGuardService } from './can-deactivated-guard.service';

describe('CanDeactivatedGuardService', () => {
  let service: CanDeactivatedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivatedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
