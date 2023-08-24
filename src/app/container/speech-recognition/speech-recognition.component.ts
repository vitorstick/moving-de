import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RecognitionComponent } from 'src/app/components/recognition/recognition.component';
import { SpeechComponent } from 'src/app/components/speech/speech.component';
import { TranslateApiService } from 'src/app/services/translate.api.service';

@Component({
  selector: 'app-speech-recognition',
  standalone: true,
  templateUrl: './speech-recognition.component.html',
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
          (res: any) =>
            res[0][0][0]
        )
      );
  }
}
