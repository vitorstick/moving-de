import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { TranslateApiService } from 'src/app/services/translate.api.service';
import {
  translateAction,
  translateFailureAction,
  translateSuccessAction,
} from '../actions/translations.actions';
import { selectFeatureLanguage } from '../selectors';

@Injectable()
export class TranslationsEffects {
  translate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(translateAction),
      withLatestFrom(this.store.select(selectFeatureLanguage)),
      exhaustMap(([action, lang]) =>
        this.translateApiService.translate(action.key, lang).pipe(
          map((result) => {
            const value = result[0][0][0];
            return translateSuccessAction({ translation: value });
          }),
          catchError(() => {
            return of(translateFailureAction({ error: 'Error' }));
          })
        )
      )
    )
  );

  actionFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(translateFailureAction),
        map((action) => {
          console.log(action.error);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private translateApiService: TranslateApiService
  ) {}
}
