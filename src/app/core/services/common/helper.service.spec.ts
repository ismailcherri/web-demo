import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { SharedModule } from '@app/shared';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
