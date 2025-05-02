import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }
}
