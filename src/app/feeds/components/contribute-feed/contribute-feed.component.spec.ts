import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeFeedComponent } from './contribute-feed.component';
import { SharedModule } from '@app/shared';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContributeCapsuleComponent', () => {
  let component: ContributeFeedComponent;
  let fixture: ComponentFixture<ContributeFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributeFeedComponent],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
