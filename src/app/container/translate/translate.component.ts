import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { RouteData } from 'src/app/models/route-data';
// import { LanguageService } from 'src/app/services/language.service';
// import { TranslateApiService } from 'src/app/services/translate.api.service';
import { translateAction } from 'src/app/store/actions/translations.actions';
import {
  selectFeatureOriginalString,
  selectFeatureTranslatedString,
} from 'src/app/store/selectors';
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
  translatedText$!: Observable<string | null>;
  originalText$!: Observable<string | null>;
  routeData!: RouteData;
  // language: string = this.lgService.getLanguage();

  // originalText = signal<string>('');

  constructor(
    // private translateApi: TranslateApiService,
    private route: ActivatedRoute,
    // private lgService: LanguageService,
    private store: Store
  ) {}

  ngOnInit() {
    this.routeData = this.route.snapshot.data as RouteData;

    this.originalText$ = this.store.select(selectFeatureOriginalString);
    this.translatedText$ = this.store.select(selectFeatureTranslatedString);
  }

  handleSubmitText(text: string) {
    this.store.dispatch(translateAction({ key: text }));
    // this.originalText.set(text);

    // this.language = this.lgService.getLanguage();

    // this.translatedText$ = this.translateApi
    //   .translate(text, this.language)
    //   .pipe(
    //     map((res: any) => {
    //       console.log(res);
    //       return res[0][0][0];
    //     })
    //   );
  }
}
