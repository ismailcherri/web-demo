import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageComponent } from './aboutus-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { SharedModule } from '@app/shared';

describe('AboutUsPageComponent', () => {
  let component: AboutUsPageComponent;
  let fixture: ComponentFixture<AboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      providers: [MessageService],
      declarations: [AboutUsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
