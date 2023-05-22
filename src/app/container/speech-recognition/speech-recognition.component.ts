import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs';
import { RecognitionComponent } from 'src/app/components/recognition/recognition.component';
import { SpeechComponent } from 'src/app/components/speech/speech.component';
import { GoogleTranslateApiResponse } from 'src/app/models/google-translate-api';
import { TranslateApiService } from 'src/app/services/translate.api.service';

@Component({
  selector: 'app-speech-recognition',
  standalone: true,
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss'],
  imports: [RecognitionComponent, AsyncPipe, SpeechComponent],
})
export class SpeechRecognitionComponent {
  translatedText$!: Observable<string>;
  spokenText = '';

  constructor(private translateApi: TranslateApiService) {}

  handleText(text: string) {
    this.spokenText = text;

    this.translatedText$ = this.translateApi
      .translate(text, 'en')
      .pipe(
        map(
          (res: GoogleTranslateApiResponse) =>
            res.data.translations[0].translatedText
        )
      );
  }
}
