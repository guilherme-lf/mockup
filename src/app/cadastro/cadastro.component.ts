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
  cadastroForm: FormGroup;
  
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private fb: FormBuilder,
              private cadastroService: CadastroService) 
  {
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
    const usuario = { nome: this.nome, email: this.email, senha: this.senha };
  this.cadastroService.cadastrarUsuario(usuario).subscribe(
    res => console.log('Usuário cadastrado:', res),
    err => console.error('Erro no cadastro:', err)
  );
  }

}
