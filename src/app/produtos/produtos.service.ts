import { Injectable } from '@angular/core';
import { Product } from './produtos.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) {}

  private products: Product[] = [
    {
      id: 1,
      name: 'Cafeteira Elétrica',
      price: 149.90,
      image: '',
      featured: true,
      info: 'Prepare cafés fresquinhos e saborosos com facilidade usando esta cafeteira moderna e prática.'
    },
    {
      id: 2,
      name: 'Fone Bluetooth',
      price: 229.00,
      image: '',
      featured: true,
      info: 'Fone sem fio com excelente qualidade de som, ideal para ouvir músicas e atender chamadas no dia a dia.'
    },
    {
      id: 3,
      name: 'Smartwatch Fitness',
      price: 499.99,
      image: '',
      featured: true,
      info: 'Relógio inteligente com monitoramento cardíaco, contagem de passos e integração com smartphone.'
    },
    {
      id: 4,
      name: 'Teclado Mecânico RGB',
      price: 359.50,
      image: '',
      featured: false,
      info: 'Teclado com switches mecânicos e iluminação RGB personalizável, ideal para gamers e programadores.'
    },
    {
      id: 5,
      name: 'Mouse Sem Fio',
      price: 89.90,
      image: '',
      featured: false,
      info: 'Mouse ergonômico com conexão estável via USB, perfeito para uso diário e portátil.'
    },
    {
      id: 6,
      name: 'Webcam Full HD',
      price: 129.90,
      image: '',
      featured: false,
      info: 'Webcam com resolução Full HD e microfone embutido, ideal para videochamadas e transmissões.'
    },
    {
      id: 7,
      name: 'Cadeira Gamer',
      price: 799.00,
      image: '',
      featured: false,
      info: 'Cadeira confortável com design ergonômico e apoio para lombar, perfeita para longas sessões de uso.'
    },
    {
      id: 8,
      name: 'Monitor 27” 4K',
      price: 1599.99,
      image: '',
      featured: false,
      info: 'Monitor de 27 polegadas com resolução 4K Ultra HD e alto desempenho em cores e nitidez.'
    },
    {
      id: 9,
      name: 'Roteador Wi-Fi 6',
      price: 399.00,
      image: '',
      featured: false,
      info: 'Roteador de alta velocidade com tecnologia Wi-Fi 6, ideal para múltiplos dispositivos conectados.'
    },
    {
      id: 10,
      name: 'Caixa de Som Bluetooth',
      price: 249.90,
      image: '',
      featured: false,
      info: 'Caixa de som portátil com bateria duradoura e som potente, perfeita para festas e uso externo.'
    }
    
  ];

  getAll(): Product[] {
    return this.products;
  }

  getFeatured(): Product[] {
    return this.products.filter(product => product.featured);
  }

  getProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/produtos');
  }
}