import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-product-reactive.html',
  styleUrl: './add-product-reactive.css',
})
export class AddProductReactive {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern(/^€[0-9]+\.[0-9]{2}/)]),
    details: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  get invalidPrice () {
    return this.form.get('price')?.hasError('pattern') && this.form.get('price')?.touched;
  }
}
