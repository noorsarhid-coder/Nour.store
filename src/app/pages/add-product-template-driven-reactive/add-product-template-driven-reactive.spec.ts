import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTemplateDrivenReactive } from './add-product-template-driven-reactive';

describe('AddProductTemplateDrivenReactive', () => {
  let component: AddProductTemplateDrivenReactive;
  let fixture: ComponentFixture<AddProductTemplateDrivenReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductTemplateDrivenReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductTemplateDrivenReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
