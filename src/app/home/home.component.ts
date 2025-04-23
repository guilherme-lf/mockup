import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProdutosComponent } from '../produtos/produtos.component';
import { ProductService } from '../produtos/produtos.service';
import { Product } from '../produtos/produtos.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.featuredProducts = this.service.getFeatured();
  }
}

