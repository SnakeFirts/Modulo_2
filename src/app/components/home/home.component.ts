import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recomendacion } from '../../core/models/recomendacion.model';
import { AppState } from '../../store/app.state';
import { addRecomendacion } from '../../store/recomendaciones/recomendaciones.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() nuevaRecomendacionPublicada: EventEmitter<Recomendacion> = new EventEmitter<Recomendacion>();

  constructor(private store: Store<AppState>) {}
  alRecibirRecomendacion(recomendacion: Recomendacion): void {
    this.store.dispatch(addRecomendacion({ recomendacion }));
    this.nuevaRecomendacionPublicada.emit(recomendacion);
  }
}
