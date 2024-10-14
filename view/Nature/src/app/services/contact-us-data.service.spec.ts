import { TestBed } from '@angular/core/testing';

import { ContactUsDataService } from './contact-us-data.service';

describe('ContactUsDataService', () => {
  let service: ContactUsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactUsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
