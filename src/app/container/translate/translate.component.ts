import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { TranslateApiService } from 'src/app/services/translate.api.service';
import { GoogleTranslateApiResponse } from 'src/app/models/google-translate-api';
import { SpeechComponent } from '../../components/speech/speech.component';
import { RouteData } from 'src/app/models/route-data';

@Component({
  selector: 'app-translate',
  standalone: true,
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextInputComponent, SpeechComponent, AsyncPipe, RouterModule],
})
export class TranslateComponent implements OnInit {
  translatedText$!: Observable<string>;
  routeData!: RouteData;

  originalText = signal<string>('');

  constructor(
    private translateApi: TranslateApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeData = this.route.snapshot.data as RouteData;
  }

  handleSubmitText(text: string) {
    this.originalText.set(text);

    this.translatedText$ = this.translateApi
      .translate(text, this.routeData.lang ?? 'de')
      .pipe(
        map(
          (res: GoogleTranslateApiResponse) =>
            res.data.translations[0].translatedText
        )
      );
  }
}
