import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekbytePageComponent } from './tekbyte-page.component';
import { AppRoutingModule } from '@app/app-routing.module';

describe('TopicsPageComponent', () => {
  let component: TekbytePageComponent;
  let fixture: ComponentFixture<TekbytePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [TekbytePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekbytePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
