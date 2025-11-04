import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProvidersComponent } from './bank-providers.component';

describe('BankProvidersComponent', () => {
  let component: BankProvidersComponent;
  let fixture: ComponentFixture<BankProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
