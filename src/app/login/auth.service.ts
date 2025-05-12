import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'user';
  private apiUrl = 'http://localhost:3000/api'; // Defina a URL da sua API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        if (response.success) {
          // Supondo que você esteja recebendo um token ou dados do usuário
          localStorage.setItem(this.storageKey, JSON.stringify(response.user)); // Salva os dados do usuário no localStorage
          return true;
        }
        return false;
      }),
      catchError(err => {
        console.error('Erro no login:', err);
        return of(false); // Retorna false em caso de erro
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.storageKey); // Remove o usuário do localStorage
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey); // Verifica se o usuário está logado
  }

  getUser(): { email: string } | null {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null; // Retorna os dados do usuário armazenados ou null
  }
}
