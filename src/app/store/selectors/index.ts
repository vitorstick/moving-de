import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TranslationsState } from '../states/translations.state';

export const translationKey = 'translations';

export interface AppState {
  translations: TranslationsState;
}

export const selectFeature =
  createFeatureSelector<TranslationsState>(translationKey);

export const selectFeatureLanguage = createSelector(
  selectFeature,
  (state) => state.language
);

export const selectFeatureOriginalString = createSelector(
  selectFeature,
  (state) => state.originalString
);

export const selectFeatureTranslatedString = createSelector(
  selectFeature,
  (state) => state.translatedString
);
