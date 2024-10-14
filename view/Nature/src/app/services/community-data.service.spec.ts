import { TestBed } from '@angular/core/testing';

import { CommunityDataService } from './community-data.service';

describe('CommunityDataService', () => {
  let service: CommunityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
