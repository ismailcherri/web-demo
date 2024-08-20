import { TestBed } from '@angular/core/testing';

import { SubscriptionApiService } from './subscription-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubscriptionApiService', () => {
  let service: SubscriptionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SubscriptionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
