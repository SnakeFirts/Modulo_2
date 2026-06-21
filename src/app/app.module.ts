import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/about/nosotros.component';
import { PerfilFormComponent } from './components/profile-form/perfil-form.component';
import { RecomendacionFormComponent } from './components/recomendacion-form/recomendacion-form.component';
import { RecomendacionListComponent } from './components/recomendacion-list/recomendacion-list.component';

import { recomendacionesReducer } from './store/recomendaciones/recomendaciones.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    PerfilFormComponent,
    RecomendacionFormComponent,
    RecomendacionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Configuración de NgRx Store: registramos el reducer "recomendaciones"
    // bajo la clave 'recomendaciones' del AppState.
    StoreModule.forRoot({
      recomendaciones: recomendacionesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
