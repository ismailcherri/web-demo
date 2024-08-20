import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedoComponent } from './whatwedo.component';
import { SharedModule } from '@app/shared';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WhatwedoComponent', () => {
  let component: WhatwedoComponent;
  let fixture: ComponentFixture<WhatwedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatwedoComponent],
      imports: [SharedModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatwedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
