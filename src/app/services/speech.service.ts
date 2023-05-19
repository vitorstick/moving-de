import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  synthesis = window.speechSynthesis;

  start(text: string, rate = 1) {
    const textToSpeech = new SpeechSynthesisUtterance(text);
    textToSpeech.lang = 'de-DE';
    textToSpeech.text = text;
    textToSpeech.rate = rate;

    textToSpeech.onend = function () {
      console.info('SpeechSynthesisUtterance.onend');
    };

    textToSpeech.onerror = function (error) {
      console.error('SpeechSynthesisUtterance.onerror ', error);
    };

    textToSpeech.onstart = function () {
      console.info('SpeechSynthesisUtterance.onstart');
    };
    // GET DEUTSCH VOICE
    const voice = speechSynthesis.getVoices().filter((voice) => {
      return voice.name === 'Google Deutsch';
    })[0];
    textToSpeech.voice = voice;

    this.synthesis.speak(textToSpeech);
  }
}
