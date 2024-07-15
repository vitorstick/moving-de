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
  ),
  on(
    TranslationsActions.translateAction,
    (state, { key }): TranslationsState => {
      return {
        ...state,
        originalString: key,
        translatedString: null,
      };
    }
  ),
  on(
    TranslationsActions.translateSuccessAction,
    (state, { translation }): TranslationsState => {
      return {
        ...state,
        translatedString: translation,
      };
    }
  ),
  on(TranslationsActions.translateFailureAction, (state): TranslationsState => {
    return {
      ...state,
      translatedString: null,
    };
  })
);
