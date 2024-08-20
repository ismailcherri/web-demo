import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmHubComponent } from './llm-hub.component';
import { SharedModule } from '@app/shared';

describe('LlmHubComponent', () => {
  let component: LlmHubComponent;
  let fixture: ComponentFixture<LlmHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlmHubComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlmHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
