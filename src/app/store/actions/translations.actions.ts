import { createAction, props } from '@ngrx/store';

export const changeLanguageAction = createAction(
  '[Translations] Change Language',
  props<{ language: string }>()
);

export const translateAction = createAction(
  '[Translations] Translate',
  props<{ key: string }>()
);

export const translateSuccessAction = createAction(
  '[Translations] Translate Success',
  props<{ translation: string }>()
);

export const translateFailureAction = createAction(
  '[Translations] Translate Failure',
  props<{ error: string }>()
);
