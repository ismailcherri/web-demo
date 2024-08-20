import { TestBed } from '@angular/core/testing';

import { InterviewApiService } from './interview-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InterviewApiService', () => {
  let service: InterviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(InterviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
