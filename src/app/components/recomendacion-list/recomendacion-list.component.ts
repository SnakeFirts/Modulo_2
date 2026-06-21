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
  
  votarAFavor(id: number): void {
    this.store.dispatch(upvoteRecomendacion({ id }));
  }

  votarEnContra(id: number): void {
    this.store.dispatch(downvoteRecomendacion({ id }));
  }

  eliminar(id: number): void {
    this.store.dispatch(deleteRecomendacion({ id }));
  }

  puntaje(item: Recomendacion): number {
    return item.votosPositivos - item.votosNegativos;
  }
}
