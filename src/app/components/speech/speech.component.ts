import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-speech',
  standalone: true,
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule],
})
export class SpeechComponent {
  @Input({ required: true }) text: string | null = '';
  @Input({ required: true }) originalText: string | null = '';

  constructor(private speechService: SpeechService) {}

  start(text: string, rate = 1) {
    this.speechService.start(text, rate);
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
