import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SpeechComponent } from 'src/app/components/speech/speech.component';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { RouteData } from 'src/app/models/route-data';
import { TranslateApiService } from 'src/app/services/translate.api.service';

@Component({
  selector: 'app-translate-de-en',
  standalone: true,
  templateUrl: './translate-de-en.component.html',
  styleUrls: ['./translate-de-en.component.scss'],
  imports: [TextInputComponent, SpeechComponent, AsyncPipe],
})
export class TranslateDeEnComponent {
  translatedText$!: Observable<string>;
  routeData!: RouteData;

  originalText = signal<string>('');

  constructor(private translateApi: TranslateApiService) {}

  handleSubmitText(text: string) {
    this.originalText.set(text);

    this.translatedText$ = this.translateApi
      .translate(text, 'en')
      .pipe(map((res: any) => res[0][0][0]));
  }
}
