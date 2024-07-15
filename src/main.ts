import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { translationReducer } from './app/store/reducers/translations.reducer';
import { translationsFeatureKey } from './app/store/states/translations.state';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule, AppRoutingModule),
    provideAnimations(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    // ngrx state management
    provideStore(),
    provideState({ name: translationsFeatureKey, reducer: translationReducer }),
    provideEffects(),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
  ],
}).catch((err) => console.error(err));
