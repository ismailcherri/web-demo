import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStudioComponent } from './skill-studio.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared';

describe('AboutUsPageComponent', () => {
  let component: SkillStudioComponent;
  let fixture: ComponentFixture<SkillStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, SharedModule],
      declarations: [SkillStudioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
