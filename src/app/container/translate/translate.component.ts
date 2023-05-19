import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { TranslateApiService } from 'src/app/services/translate.api.service';
import { GoogleTranslateApiResponse } from 'src/app/models/google-translate-api';
import { SpeechComponent } from '../../components/speech/speech.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-translate',
  standalone: true,
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextInputComponent, SpeechComponent, AsyncPipe],
})
export class TranslateComponent {
  translatedText$!: Observable<string>;

  originalText = signal<string>('');

  constructor(private translateApi: TranslateApiService) {}

  handleSubmitText(text: string) {
    this.originalText.set(text);

    this.translatedText$ = this.translateApi
      .translate(text, 'de')
      .pipe(
        map(
          (res: GoogleTranslateApiResponse) =>
            res.data.translations[0].translatedText
        )
      );
  }
}
