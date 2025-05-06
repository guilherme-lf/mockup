import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  product: any;
  productId: number | null = null;

  products = [
    {
      id: 1,
      name: 'Cafeteira Elétrica',
      price: 149.90,
      image: '',
      featured: true,
      description: 'Cafeteira elétrica de alta capacidade, prepara até 18 xícaras de café com sistema corta-pingos e placa aquecedora.'
    },
    {
      id: 2,
      name: 'Fone Bluetooth',
      price: 229.00,
      image: '',
      featured: true,
      description: 'Fone sem fio com cancelamento de ruído ativo, bateria de até 30h e compatibilidade com assistente de voz.'
    },
    {
      id: 3,
      name: 'Smartwatch Fitness',
      price: 499.99,
      image: '',
      featured: false,
      description: 'Relógio inteligente com monitoramento de batimentos, oxigenação, sono e GPS integrado, resistente à água.'
    },
    {
      id: 4,
      name: 'Teclado Mecânico RGB',
      price: 359.50,
      image: '',
      featured: true,
      description: 'Teclado gamer com switches mecânicos, iluminação RGB personalizável e estrutura reforçada.'
    },
    {
      id: 5,
      name: 'Mouse Sem Fio',
      price: 89.90,
      image: '',
      featured: false,
      description: 'Mouse ergonômico com conexão 2.4GHz, sensor de alta precisão e até 12 meses de bateria.'
    },
    {
      id: 6,
      name: 'Webcam Full HD',
      price: 129.90,
      image: '',
      featured: true,
      description: 'Webcam com resolução 1080p, microfone embutido com redução de ruído e clipe de fixação universal.'
    },
    {
      id: 7,
      name: 'Cadeira Gamer',
      price: 799.00,
      image: '',
      featured: false,
      description: 'Cadeira ergonômica com ajuste de altura, encosto reclinável, apoio lombar e revestimento premium.'
    },
    {
      id: 8,
      name: 'Monitor 27” 4K',
      price: 1599.99,
      image: '',
      featured: true,
      description: 'Monitor com resolução Ultra HD 4K, painel IPS, bordas finas e suporte a HDR10 para cores vibrantes.'
    },
    {
      id: 9,
      name: 'Roteador Wi-Fi 6',
      price: 399.00,
      image: '',
      featured: false,
      description: 'Roteador dual-band com tecnologia Wi-Fi 6, velocidade de até 1.8Gbps e suporte a múltiplos dispositivos.'
    },
    {
      id: 10,
      name: 'Caixa de Som Bluetooth',
      price: 249.90,
      image: '',
      featured: false,
      description: 'Caixa portátil com som estéreo, bateria de 12h, resistência à água (IPX7) e emparelhamento rápido.'
    }
  ];

  constructor(private route: ActivatedRoute, 
              private cartService: CartService,
              private router: Router
   ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID do produto:', this.productId);
  
    // Aqui você busca o produto com base no ID
    this.product = this.products.find(p => p.id === this.productId);
  }

  adicionarAoCarrinho() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.router.navigate(['/carrinho']); // Redireciona para a página do carrinho
    }
  }

}
