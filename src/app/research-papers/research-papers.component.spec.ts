import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchPapersComponent } from './research-papers.component';
import { SharedModule } from '@app/shared';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResearchPapersComponent', () => {
  let component: ResearchPapersComponent;
  let fixture: ComponentFixture<ResearchPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchPapersComponent],
      imports: [SharedModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
