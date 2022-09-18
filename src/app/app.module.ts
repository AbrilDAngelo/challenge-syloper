import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgRx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { reducers } from './store/movies.reducers';
import { MoviesEffects } from './store/movies.effects';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ reducers }, {}),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
