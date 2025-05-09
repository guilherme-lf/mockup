import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  
  email: string = '';
  senha: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    const { email, password } = this.loginForm.value;
    const success = this.authService.login(email, password);

    if (success) {
      console.log('Login bem-sucedido!');
      this.router.navigate(['/produtos']);
    } else {
      console.log('Email ou senha incorretos.');
      alert('Credenciais inválidas.');
    }
  }

  logar() {
    
    const credentials = { email: this.email, senha: this.senha };
    this.loginService.loginUsuario(credentials).subscribe(
      res => console.log('Login bem-sucedido:', res),
      err => console.error('Erro no login:', err)
    );
  }


}
