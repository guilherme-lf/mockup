import { Injectable } from '@angular/core';
import { Product } from './produtos.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Cafeteira Elétrica',      price: 149.90, image: '', featured: true  },
    { id: 2, name: 'Fone Bluetooth',          price: 229.00, image: '', featured: true  },
    { id: 3, name: 'Smartwatch Fitness',      price: 499.99, image: '', featured: true  },
    { id: 4, name: 'Teclado Mecânico RGB',    price: 359.50, image: '', featured: false },
    { id: 5, name: 'Mouse Sem Fio',           price: 89.90,  image: '', featured: false },
    { id: 6, name: 'Webcam Full HD',          price: 129.90, image: '', featured: false },
    { id: 7, name: 'Cadeira Gamer',           price: 799.00, image: '', featured: false },
    { id: 8, name: 'Monitor 27" 4K',          price: 1599.99,image: '', featured: false },
    { id: 9, name: 'Roteador Wi‑Fi 6',        price: 399.00, image: '', featured: false },
    { id: 10,name: 'Caixa de Som Bluetooth',  price: 249.90, image: '', featured: false }
    
  ];

  getAll(): Product[] {
    return this.products;
  }

  getFeatured(): Product[] {
    return this.products.filter(product => product.featured);
  }
}