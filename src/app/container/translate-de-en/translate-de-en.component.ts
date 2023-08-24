import { AsyncPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class TranslateDeEnComponent implements OnInit {
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
      .translate(text, this.routeData.lang ?? 'en')
      .pipe(
        map(
          (res: any) =>
          res[0][0][0]
        )
      );
  }
}
