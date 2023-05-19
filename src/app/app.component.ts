import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { SpeechComponent } from './components/speech/speech.component';
import { TranslateComponent } from './container/translate/translate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    MatButtonModule,
    HeaderComponent,
    SpeechComponent,
    TranslateComponent,
  ],
})
export class AppComponent {
  title = 'moving-de';
}
