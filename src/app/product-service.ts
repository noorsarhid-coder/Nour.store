import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    const products = [
    {price: 2.79, url: 'https://static.ah.nl/dam/product/AHI_4354523130303534323130?revLabel=1&rendition=400x400_JPG_Q85&fileType=binary'},
    {name: 'Pepsi', price: 2.79, url: 'https://static.ah.nl/dam/product/AHI_4354523130303534323130?revLabel=1&rendition=400x400_JPG_Q85&fileType=binary'},
    {name: 'tea', price: 1.39, url: 'https://static.ah.nl/dam/product/AHI_4354523130313239393436?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary'},
  ];
  return products;
}  
  
}
