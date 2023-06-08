import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
})
export class TextInputComponent implements AfterViewInit {
  @Output() textSubmit = new EventEmitter<string>();

  @ViewChild('textArea') textArea!: ElementRef<HTMLTextAreaElement>;

  formGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.textArea.nativeElement.focus();
      // to make keyboard appear on mobile
      this.textArea.nativeElement.click();
    }, 0);
  }

  onSubmit(): void {
    if (this.formGroup.value.text) {
      this.textSubmit.emit(this.formGroup.value.text);
      this.formGroup.reset();
    }
  }
}
