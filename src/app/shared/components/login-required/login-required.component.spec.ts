import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequiredComponent } from './login-required.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@app/shared/shared.module';

describe('LoginRequiredComponent', () => {
  let component: LoginRequiredComponent;
  let fixture: ComponentFixture<LoginRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRequiredComponent],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
