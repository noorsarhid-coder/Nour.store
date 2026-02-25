import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTemplateDriven } from './add-product-template-driven';

describe('AddProductTemplateDriven', () => {
  let component: AddProductTemplateDriven;
  let fixture: ComponentFixture<AddProductTemplateDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductTemplateDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductTemplateDriven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
