import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: { nome: string, email: string, senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, usuario);
  }
}
