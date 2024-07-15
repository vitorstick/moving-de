import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { RouteData } from 'src/app/models/route-data';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateApiService } from 'src/app/services/translate.api.service';
import { SpeechComponent } from '../../components/speech/speech.component';

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
  language: string = this.lgService.getLanguage();

  originalText = signal<string>('');

  constructor(
    private translateApi: TranslateApiService,
    private route: ActivatedRoute,
    private lgService: LanguageService
  ) {}

  ngOnInit() {
    this.routeData = this.route.snapshot.data as RouteData;
  }

  handleSubmitText(text: string) {
    this.originalText.set(text);

    this.language = this.lgService.getLanguage();

    this.translatedText$ = this.translateApi
      .translate(text, this.language)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res[0][0][0];
        })
      );
  }
}
