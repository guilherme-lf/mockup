import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private cadastroService: CadastroService) {}
  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const { nome, email, senha } = this.cadastroForm.value;
  
      console.log('Cadastro enviado:', nome, email, senha);
      alert('Cadastro realizado com sucesso!');
      this.cadastroForm.reset();
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }

  cadastrar() {
    const usuario = this.cadastroForm.value;
  
    this.cadastroService.cadastrarUsuario(usuario).subscribe(
      res => console.log('Usuário cadastrado:', res),
      err => console.error('Erro no cadastro:', err)
    );
  }
}
