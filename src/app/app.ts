import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { Caroussel } from './caroussel/caroussel';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Caroussel, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private productService = inject(ProductService);
  products = this.productService.getProducts();
}
