import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language$ = new BehaviorSubject<string>('NL');

  setLanguage(lang: string) {
    this.language$.next(lang);
  }

  getLanguage(): string {
    return this.language$.getValue();
  }
}
