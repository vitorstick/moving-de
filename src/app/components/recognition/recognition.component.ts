/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  signal,
  effect,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recognition',
  standalone: true,
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, NgIf],
})
export class RecognitionComponent implements OnInit {
  @Output() textSubmit = new EventEmitter<string>();

  spokenText = signal<string>('');

  recognition = new (window as any).webkitSpeechRecognition();

  constructor(private cdr: ChangeDetectorRef) {
    effect(() => {
      this.textSubmit.emit(this.spokenText());
    });
  }

  ngOnInit(): void {
    // SET LANGUAGE TO GERMAN
    this.recognition.lang = 'de-DE';

    this.recognition.onresult = (event: any) => {
      // event is a SpeechRecognitionEvent object
      // it holds all the lines we have captured so far
      // we only need the current one
      const current = event.resultIndex;

      // get a transcript of what was said
      const transcript = event.results[current][0].transcript;

      // add the current transcript to the contents of our Note
      this.spokenText.set(transcript);
      this.cdr.detectChanges();
    };

    this.recognition.onspeechend = () => {
      this.recognition.stop();
      console.info('Speech recognition has stopped.');
    };
  }

  handleButtonStartClick(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    // start speech recognition
    this.recognition.start();
  }
}
