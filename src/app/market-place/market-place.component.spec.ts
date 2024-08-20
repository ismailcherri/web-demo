import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlaceComponent } from './market-place.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared';

describe('MarketPlaceComponent', () => {
  let component: MarketPlaceComponent;
  let fixture: ComponentFixture<MarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketPlaceComponent],
      imports: [HttpClientModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
