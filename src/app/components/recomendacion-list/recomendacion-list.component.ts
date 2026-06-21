import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recomendacion } from '../../core/models/recomendacion.model';
import { AppState } from '../../store/app.state';
import {
  deleteRecomendacion,
  upvoteRecomendacion,
  downvoteRecomendacion
} from '../../store/recomendaciones/recomendaciones.actions';

@Component({
  selector: 'app-recomendacion-list',
  templateUrl: './recomendacion-list.component.html',
  styleUrls: ['./recomendacion-list.component.css']
})
export class RecomendacionListComponent implements OnInit {

  recomendaciones$!: Observable<Recomendacion[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.recomendaciones$ = this.store.select(state => state.recomendaciones.items);
  }

  // Voto a favor: despacha la acción upvote para el id correspondiente
  votarAFavor(id: number): void {
    this.store.dispatch(upvoteRecomendacion({ id }));
  }

  // Voto en contra: despacha la acción downvote para el id correspondiente
  votarEnContra(id: number): void {
    this.store.dispatch(downvoteRecomendacion({ id }));
  }

  // Borrado de un elemento de la colección
  eliminar(id: number): void {
    this.store.dispatch(deleteRecomendacion({ id }));
  }

  // Calcula el puntaje neto (positivos - negativos) para mostrarlo en pantalla
  puntaje(item: Recomendacion): number {
    return item.votosPositivos - item.votosNegativos;
  }
}
