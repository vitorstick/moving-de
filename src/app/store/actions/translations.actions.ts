import { createAction, props } from '@ngrx/store';

export const changeLanguageAction = createAction(
  '[Translations] Change Language',
  props<{ language: string }>()
);
