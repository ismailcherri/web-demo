import { TestBed } from '@angular/core/testing';

import { FeedbackApiService } from './feedback-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeedbackApiService', () => {
  let service: FeedbackApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FeedbackApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
