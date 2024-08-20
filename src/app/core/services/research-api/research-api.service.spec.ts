import { TestBed } from '@angular/core/testing';

import { ResearchApiService } from './research-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ResearchApiService', () => {
  let service: ResearchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ResearchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
