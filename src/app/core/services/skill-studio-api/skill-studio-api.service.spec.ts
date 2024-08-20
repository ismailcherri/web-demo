import { TestBed } from '@angular/core/testing';

import { SkillStudioApiService } from './skill-studio-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('SkillStudioApiService', () => {
  let service: SkillStudioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SkillStudioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
