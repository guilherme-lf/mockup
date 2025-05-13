import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from './produtos.model';
import { ProductService } from './produtos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})

export class ProdutosComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
  ) {}
  
  ngOnInit() {
    this.products = this.productService.getAll();
  }

  adicionarAoCarrinho(produto: any) {
    this.cartService.addToCart(produto);
  }


}
