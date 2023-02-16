import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdsRequestsService } from './ads-requests.service';

describe('AdsRequestsService', () => {
  let service: AdsRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(AdsRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
