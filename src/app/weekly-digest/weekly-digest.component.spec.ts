import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDigestComponent } from './weekly-digest.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared';

describe('WeeklyDigestComponent', () => {
  let component: WeeklyDigestComponent;
  let fixture: ComponentFixture<WeeklyDigestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyDigestComponent],
      imports: [HttpClientModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDigestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
