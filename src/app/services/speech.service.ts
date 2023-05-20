import { Injectable } from '@angular/core';
import { RouteData } from '../models/route-data';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  synthesis = window.speechSynthesis;

  start(
    text: string,
    rate = 1,
    routeData: RouteData = {
      lang: 'en',
      langTo: 'de-DE',
      voice: 'Google Deutsch',
    }
  ) {
    const textToSpeech = new SpeechSynthesisUtterance(text);
    textToSpeech.lang = routeData.langTo;
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
    // GET VOICE
    const voice = speechSynthesis.getVoices().filter((voice) => {
      return voice.name === routeData.voice;
    })[0];
    textToSpeech.voice = voice;

    this.synthesis.speak(textToSpeech);
  }
}
