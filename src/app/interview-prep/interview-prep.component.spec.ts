import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPrepComponent } from './interview-prep.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared';

describe('InterviewPrepComponent', () => {
  let component: InterviewPrepComponent;
  let fixture: ComponentFixture<InterviewPrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewPrepComponent],
      imports: [HttpClientModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
