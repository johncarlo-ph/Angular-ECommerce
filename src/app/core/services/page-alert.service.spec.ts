import { TestBed } from '@angular/core/testing';

import { PageAlertService } from './page-alert.service';

describe('PageAlertService', () => {
  let service: PageAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
