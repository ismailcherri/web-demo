import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCarouselComponent } from './community-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared';

describe('CommunityCarouselComponent', () => {
  let component: CommunityCarouselComponent;
  let fixture: ComponentFixture<CommunityCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityCarouselComponent],
      imports: [HttpClientModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
