import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  constructor() { }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('dark-theme', this.darkMode);
    body.classList.toggle('light-theme', !this.darkMode);
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
