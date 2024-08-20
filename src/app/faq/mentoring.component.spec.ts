import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringComponent } from './mentoring.component';
import { SharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app-routing.module';

describe('MentoringComponent', () => {
  let component: MentoringComponent;
  let fixture: ComponentFixture<MentoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, AppRoutingModule],
      declarations: [MentoringComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
