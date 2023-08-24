// GOOGLE TRANSLATE RESPONSE TYPE
export interface GoogleTranslateApiResponse {
  data: {
    translations: {
      translatedText: string;
    }[];
  };
}

