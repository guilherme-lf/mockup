import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';

  constructor() {
    this.loadCart();
  }

  cart: any[] = [];

  addToCart(product: any) {
    const existing = this.cart.find(p => p.id === product.id);
    if (!existing) {
      this.cart.push(product);
      this.saveCart();
    }
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  private loadCart() {
    const data = localStorage.getItem(this.cartKey);
    this.cart = data ? JSON.parse(data) : [];
  }
}
