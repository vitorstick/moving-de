import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeLanguageAction } from 'src/app/store/actions/translations.actions';
import { selectFeatureLanguage } from 'src/app/store/selectors';
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
    AsyncPipe,
  ],
})
export class HeaderComponent implements OnInit {
  lang$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.lang$ = this.store.select(selectFeatureLanguage);
  }

  onLanguageChange(lang: string) {
    this.store.dispatch(changeLanguageAction({ language: lang }));
  }
}
