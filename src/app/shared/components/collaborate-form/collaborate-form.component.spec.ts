import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateFormComponent } from './collaborate-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@app/shared/shared.module';

describe('CollaborateFormComponent', () => {
  let component: CollaborateFormComponent;
  let fixture: ComponentFixture<CollaborateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaborateFormComponent],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
