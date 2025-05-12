import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  irParaCadastro(): void {
    this.router.navigate(['/cadastro']);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      alert('Formulário inválido');
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (success: boolean) => {
        if (success) {
          alert('Login bem-sucedido!');
          this.router.navigate(['/produtos']);
        } else {
          alert('Email ou senha incorretos.');
        }
      },
      error: (err: any) => {
        console.error('Erro no login:', err);
        alert('Erro ao tentar fazer login.');
      }
    });
  }
}
