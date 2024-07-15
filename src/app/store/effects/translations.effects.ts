import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class TranslationsEffects {
  constructor(private actions$: Actions) {}
}
