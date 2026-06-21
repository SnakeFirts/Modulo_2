import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/about/nosotros.component';

const routes: Routes = [
  // Path con REDIRECT: la ruta raíz vacía redirige siempre hacia 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Path que indica un COMPONENT directamente
  { path: 'home', component: HomeComponent },

  { path: 'nosotros', component: NosotrosComponent },

  // Ruta comodín por si la URL no coincide con ninguna ruta conocida
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
