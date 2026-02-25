import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductReactive } from './add-product-reactive';

describe('AddProductReactive', () => {
  let component: AddProductReactive;
  let fixture: ComponentFixture<AddProductReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
