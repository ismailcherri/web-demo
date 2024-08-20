import { TestBed } from '@angular/core/testing';

import { EventApiService } from './event-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventApiService', () => {
  let service: EventApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EventApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
