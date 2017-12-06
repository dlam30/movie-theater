import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseButtonsComponent } from './purchase-buttons.component';

describe('PurchaseButtonsComponent', () => {
  let component: PurchaseButtonsComponent;
  let fixture: ComponentFixture<PurchaseButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
