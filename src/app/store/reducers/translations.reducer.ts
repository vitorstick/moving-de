import { createReducer, on } from '@ngrx/store';
import * as TranslationsActions from '../actions/translations.actions';
import { initialState, TranslationsState } from '../states/translations.state';

export const translationReducer = createReducer(
  initialState,
  on(
    TranslationsActions.changeLanguageAction,
    (state, { language }): TranslationsState => {
      return {
        ...state,
        language,
      };
    }
  )
);
