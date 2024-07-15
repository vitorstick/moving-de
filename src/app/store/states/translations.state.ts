export const translationsFeatureKey = 'translations';

export interface TranslationsState {
  language: string;
}

export const initialState: TranslationsState = {
  language: 'NL',
};
