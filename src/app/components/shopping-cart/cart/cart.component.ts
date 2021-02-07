import {Component, OnInit} from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productId: 2, productName: 'Test 2', qty: 4, price: 237},
    // {id: 2, productId: 6, productName: 'Test 6', qty: 1, price: 231},
    // {id: 3, productId: 1, productName: 'Test 1', qty: 2, price: 245},
    // {id: 4, productId: 3, productName: 'Test 3', qty: 3, price: 239},
    // {id: 5, productId: 4, productName: 'Test 4', qty: 2, price: 233}
  ];

  cardTotal = 0;

  constructor(private msg: MessengerService) {
  }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    let productExist = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }
    if (!productExist) {
      this.cartItems.push({
        productName: product.name,
        productId: product.id,
        productDescription: product.description,
        qty: 1,
        price: product.price
      });
    }
    this.cardTotal = 0;
    this.cartItems.forEach(item => {
      this.cardTotal += (item.price * item.qty);
    });
  }

}
