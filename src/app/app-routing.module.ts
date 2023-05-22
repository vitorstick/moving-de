import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // default route is en-de
  {
    path: '',
    data: { lang: 'de', langTo: 'en-US', voice: 'Google US English' },
    loadComponent: () =>
      import('./container/translate/translate.component').then(
        (mod) => mod.TranslateComponent
      ),
  },
  {
    path: 'en-de',
    data: { lang: 'de', langTo: 'de-DE', voice: 'Google Deutsch' },
    loadComponent: () =>
      import('./container/translate/translate.component').then(
        (mod) => mod.TranslateComponent
      ),
  },
  {
    path: 'de-en',
    data: { lang: 'en', langTo: 'en-US', voice: 'Google US English' },
    loadComponent: () =>
      import('./container/translate-de-en/translate-de-en.component').then(
        (mod) => mod.TranslateDeEnComponent
      ),
  },
  {
    path: 'speak',
    loadComponent: () =>
      import(
        './container/speech-recognition/speech-recognition.component'
      ).then((mod) => mod.SpeechRecognitionComponent),
  },
  // fallback route
  { path: '**', redirectTo: 'en-de', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
