import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { Caroussel } from './caroussel/caroussel';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Caroussel, Product, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private productService = inject(ProductService);
  products = signal<any[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products.set(data.products);
    });
  }
}