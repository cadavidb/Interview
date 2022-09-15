import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBenefitsComponent } from './header-benefits.component';

describe('HeaderBenefitsComponent', () => {
  let component: HeaderBenefitsComponent;
  let fixture: ComponentFixture<HeaderBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
