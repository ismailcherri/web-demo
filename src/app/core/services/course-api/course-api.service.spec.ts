import { TestBed } from '@angular/core/testing';

import { CourseApiService } from './course-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('CourseApiService', () => {
  let service: CourseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CourseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
