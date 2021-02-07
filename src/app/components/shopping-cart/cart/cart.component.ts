import {Component, OnInit} from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {Product} from '../../../models/product';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cardTotal = 0;

  constructor(private msg: MessengerService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateCartTotal();
    });
  }

  calculateCartTotal(): void {
    this.cardTotal = 0;
    this.cartItems.forEach(item => {
      this.cardTotal += (item.price * item.qty);
    });
  }
}
