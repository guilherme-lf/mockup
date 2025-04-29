import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'user';

  login(email: string, password: string): boolean {
    // Simula um login fixo (você pode melhorar isso depois)
    if (email === 'teste@teste.com' && password === '123456') {
      localStorage.setItem(this.storageKey, JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getUser(): { email: string } | null {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }
}
