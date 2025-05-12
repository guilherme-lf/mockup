import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'produtos', 
    component: ProdutosComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  { path: 'produto/:id', 
    component: DetailComponent 
  },
  {
    path: 'carrinho',
    component: CartComponent
  }
];

