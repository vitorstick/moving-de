import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleTranslateApiResponse } from '../models/google-translate-api';
import { config } from '../config/config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TranslateApiService {
  apiKey = environment.api.key;
  googleTranslateApiUrl = config.api.translate.url;

  constructor(private http: HttpClient) {}

  translate(
    text: string,
    target: string
  ): Observable<GoogleTranslateApiResponse> {
    const url = `${this.googleTranslateApiUrl}?key=${this.apiKey}`;
    const body = {
      q: text,
      target,
    };
    return this.http.post<GoogleTranslateApiResponse>(url, body);
  }
}
