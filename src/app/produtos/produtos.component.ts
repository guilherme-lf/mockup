import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from './produtos.model';
import { ProductService } from './produtos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})

export class ProdutosComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.products = this.productService.getAll();
  }


}
