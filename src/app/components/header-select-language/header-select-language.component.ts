import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header-select-language',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './header-select-language.component.html',
  styleUrl: './header-select-language.component.scss',
})
export class HeaderSelectLanguageComponent {
  @Output() languageChangeEmit = new EventEmitter<string>();

  lang = new FormControl<string>('NL', {
    nonNullable: true,
  });

  langList: string[] = ['NL', 'DE'];

  onLanguageChange() {
    this.languageChangeEmit.emit(this.lang.value);
  }
}
