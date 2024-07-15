export const translationsFeatureKey = 'translations';

export interface TranslationsState {
  language: string;
  originalString: string | null;
  translatedString: string | null;
}

export const initialState: TranslationsState = {
  language: 'NL',
  originalString: null,
  translatedString: null,
};
