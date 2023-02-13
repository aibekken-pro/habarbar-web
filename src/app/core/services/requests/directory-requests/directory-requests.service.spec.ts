import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DirectoryRequestsService } from './directory-requests.service';

describe('DirectoryRequestsService', () => {
  let service: DirectoryRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(DirectoryRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
