import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { HeaderSelectLanguageComponent } from '../header-select-language/header-select-language.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule,
    HeaderSelectLanguageComponent,
  ],
})
export class HeaderComponent {
  lang = this.lgService.getLanguage();
  constructor(private lgService: LanguageService) {}

  onLanguageChange(lang: string) {
    this.lgService.setLanguage(lang);
    this.lang = lang;
  }
}
