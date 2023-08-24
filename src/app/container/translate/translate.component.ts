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
          (res: any) =>
           {
            console.log(res);
            return res[0][0][0]
          }
        )
      );
  }
}
