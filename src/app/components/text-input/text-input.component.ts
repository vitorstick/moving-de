import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
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
export class TextInputComponent {
  @Output() textSubmit = new EventEmitter<string>();

  formGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    if (this.formGroup.value.text) {
      this.textSubmit.emit(this.formGroup.value.text);
      this.formGroup.reset();
    }
  }
}
