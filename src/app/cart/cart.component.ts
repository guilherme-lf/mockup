import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  remover(id: number) {
    this.cartService.removeFromCart(id);
    this.cart = this.cartService.getCart(); // Atualiza a lista
  }

  limparCarrinho() {
    this.cartService.clearCart();
    this.cart = [];
  }

}
