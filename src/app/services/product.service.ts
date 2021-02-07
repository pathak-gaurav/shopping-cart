import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const apiUrl = 'http://localhost:3000/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(apiUrl);
  }
}
