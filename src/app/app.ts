import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { Caroussel } from './caroussel/caroussel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Caroussel, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = [
    {price: 2.79, url: 'https://static.ah.nl/dam/product/AHI_4354523130303534323130?revLabel=1&rendition=400x400_JPG_Q85&fileType=binary'},
    {name: 'Pepsi', price: 2.79, url: 'https://share.google/OhnJuUk1AmmBZaMjz'},
    {name: 'tea', price: 1.39, url: 'https://www.google.com/aclk?sa=L&ai=DChsSEwim4-injs-SAxUVkoMHHc8tLs0YACICCAEQDRoCZWY&co=1&ase=2&gclid=Cj0KCQiAy6vMBhDCARIsAK8rOglLCCIXwEXeC9PxAXhi_wki4blV7Q6QhjQIyUPsZIX-IzMqD1pkWPMaArmlEALw_wcB&cid=CAASJeRoAPV0shrTKl_jF1AtQr2WPerwCVlcQf0nA-lOQUHwpVLLVdc&cce=2&category=acrcp_v1_32&sig=AOD64_26jmx2EwZM7QPNO27C7_yerBEUPQ&ctype=5&q=&nis=4&ved=2ahUKEwilouCnjs-SAxXg_7sIHR3yKhQQ9aACKAB6BAgKEBI&adurl='},
  ];
}
