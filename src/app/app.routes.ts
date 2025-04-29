import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'produtos', 
    component: ProdutosComponent 
  },
  { 
    path: 'login', component: 
    LoginComponent 
  },
  { path: 'produto/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }