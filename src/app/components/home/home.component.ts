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

  // Este HomeComponent actúa como padre de RecomendacionFormComponent.
  // Además de "recibir" el evento emitido por el hijo (ver home.component.html,
  // donde se escucha (recomendacionCreada)="alRecibirRecomendacion($event)"),
  // expone su propio @Output para que, si HomeComponent fuera usado a su vez
  // como componente hijo dentro de otra vista, pueda re-emitir el evento hacia arriba.
  @Output() nuevaRecomendacionPublicada: EventEmitter<Recomendacion> = new EventEmitter<Recomendacion>();

  constructor(private store: Store<AppState>) {}

  // Método que recibe el evento emitido por el componente hijo (recomendacion-form)
  alRecibirRecomendacion(recomendacion: Recomendacion): void {
    // Despachamos la acción de Redux/NgRx para agregar el elemento a la colección
    this.store.dispatch(addRecomendacion({ recomendacion }));

    // Re-emitimos el evento hacia un posible componente padre de HomeComponent
    this.nuevaRecomendacionPublicada.emit(recomendacion);
  }
}
