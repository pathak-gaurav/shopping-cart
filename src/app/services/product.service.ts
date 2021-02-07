import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Sanitzer ABC', 'This is product 1 description', 234),
    new Product(2, 'Sanitzer DEF', 'This is product 2 description', 231),
    new Product(3, 'Sanitzer GHI', 'This is product 3 description', 238),
    new Product(4, 'Sanitzer JKL', 'This is product 4 description', 245),
    new Product(5, 'Sanitzer MNO', 'This is product 5 description', 229),
    new Product(6, 'Sanitzer PQR', 'This is product 6 description', 230)
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }
}
