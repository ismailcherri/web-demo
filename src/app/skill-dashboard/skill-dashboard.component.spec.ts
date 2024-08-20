import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillDashboardComponent } from './skill-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared';

describe('CoursesComponent', () => {
  let component: SkillDashboardComponent;
  let fixture: ComponentFixture<SkillDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillDashboardComponent],
      imports: [HttpClientTestingModule, AppRoutingModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
