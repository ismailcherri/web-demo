import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSalesComponent } from './contact-sales.component';
import { SharedModule } from '@app/shared';

describe('ContactSalesComponent', () => {
  let component: ContactSalesComponent;
  let fixture: ComponentFixture<ContactSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSalesComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
