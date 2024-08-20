import { TestBed } from '@angular/core/testing';

import { VideoLibraryApiService } from './video-library-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('VideoLibraryApiService', () => {
  let service: VideoLibraryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(VideoLibraryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
