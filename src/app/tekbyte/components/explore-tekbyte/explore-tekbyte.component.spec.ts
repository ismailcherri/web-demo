import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTekbyteComponent } from './explore-tekbyte.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@app/shared';

describe('ExploreTekbyteComponent', () => {
  let component: ExploreTekbyteComponent;
  let fixture: ComponentFixture<ExploreTekbyteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreTekbyteComponent],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTekbyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
