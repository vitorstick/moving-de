import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { SpeechService } from 'src/app/services/speech.service';
import { RouteData } from 'src/app/models/route-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-speech',
  standalone: true,
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, NgIf, MatSnackBarModule],
})
export class SpeechComponent {
  private defaultRouteData: RouteData = {
    lang: 'en',
    langTo: 'de-DE',
    voice: 'Google Deutsch',
  };

  @Input({ required: true }) text: string | null = '';
  @Input({ required: true }) originalText: string | null = '';
  @Input() routeData: RouteData | null = this.defaultRouteData;

  constructor(
    private speechService: SpeechService,
    private _snackBar: MatSnackBar
  ) {}

  start(text: string, rate = 1) {
    this.speechService.start(
      text,
      rate,
      this.routeData ?? this.defaultRouteData
    );
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this._snackBar.open('Copied to clipboard', 'Close', {
      duration: 2000,
    });
  }

  handleButtonStartSlowClick(e: Event) {
    e.preventDefault();
    if (!this.text) return;
    this.start(this.text, 0.4);
  }

  handleButtonStartClick(e: Event) {
    e.preventDefault();
    if (!this.text) return;
    this.start(this.text);
  }
}
