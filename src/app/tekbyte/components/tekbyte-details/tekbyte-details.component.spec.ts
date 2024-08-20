import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekbyteDetailsComponent } from './tekbyte-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared';

describe('TopicDetailsComponent', () => {
  let component: TekbyteDetailsComponent;
  let fixture: ComponentFixture<TekbyteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TekbyteDetailsComponent],
      imports: [HttpClientModule, AppRoutingModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekbyteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
