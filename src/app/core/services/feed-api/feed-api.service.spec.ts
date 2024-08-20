import { TestBed } from '@angular/core/testing';

import { FeedApiService } from './feed-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeedApiService', () => {
  let service: FeedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FeedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
