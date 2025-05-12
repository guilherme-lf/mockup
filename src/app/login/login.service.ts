import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

 login(email: string, password: string): Observable<boolean> {
  // Suponha que você esteja verificando os dados via API:
  return this.http.post<any>('sua-api/login', { email, password }).pipe(
    map(response => {
      // Verifica sucesso, pode incluir token etc
      return response.success === true;
    }),
    catchError(err => {
      return of(false); // retorna false em caso de erro
    })
  );
}
}

