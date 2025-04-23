import { Injectable } from '@angular/core';
import { Product } from './produtos.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produto A', price: 49.99, image: '', featured: true },
    { id: 2, name: 'Produto B', price: 79.99, image: '', featured: true },
    { id: 3, name: 'Produto C', price: 99.99, image: '', featured: true },
    { id: 4, name: 'Produto D', price: 29.99, image: '', featured: false },
    { id: 5, name: 'Produto E', price: 19.99, image: '', featured: false },
    { id: 6, name: 'Produto F', price: 39.99, image: '', featured: false },
    { id: 7, name: 'Produto G', price: 59.99, image: '', featured: false },
    { id: 8, name: 'Produto H', price: 89.99, image: '', featured: false },
    { id: 9, name: 'Produto I', price: 109.99, image: '', featured: false },
    { id: 10, name: 'Produto J', price: 129.99, image: '', featured: false },
    
  ];

  getAll(): Product[] {
    return this.products;
  }

  getFeatured(): Product[] {
    return this.products.filter(product => product.featured);
  }
}