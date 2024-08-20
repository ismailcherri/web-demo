import { TestBed } from '@angular/core/testing';

import { MarketPlaceApiService } from './market-place-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('MarketPlaceApiService', () => {
  let service: MarketPlaceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MarketPlaceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
