import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/config';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TranslateApiService {
  // apiKey = environment.api.key;
  googleTranslateApiUrl = config.api.translate.url;

  constructor(private http: HttpClient) {}

  translate(
    text: string,
    target: string
  ): Observable<any> {
    // const url = `${this.googleTranslateApiUrl}?key=${this.apiKey}`;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&`+`tl=${target}&dt=t&q=${encodeURI(text)}`;


    return this.http.get<any>(url);
  }
}
