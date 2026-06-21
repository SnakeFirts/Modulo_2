import { createReducer, on } from '@ngrx/store';
import { Recomendacion } from '../../core/models/recomendacion.model';
import {
  addRecomendacion,
  deleteRecomendacion,
  upvoteRecomendacion,
  downvoteRecomendacion
} from './recomendaciones.actions';

export interface RecomendacionesState {
  items: Recomendacion[];
}

export const initialState: RecomendacionesState = {
  items: [
    {
      id: 1,
      titulo: 'Steins;Gate',
      categoria: 'Anime',
      autor: 'Snake',
      comentario: 'El mejor anime de viajes en el tiempo, la trama te atrapa desde el episodio 1.',
      anio: 2011,
      votosPositivos: 8,
      votosNegativos: 0
    },
    {
      id: 2,
      titulo: 'Kind of Blue',
      categoria: 'Música',
      autor: 'Snake',
      comentario: 'Álbum esencial para entender el jazz, ideal si estás aprendiendo piano.',
      anio: 1959,
      votosPositivos: 5,
      votosNegativos: 1
    }
  ]
};

export const recomendacionesReducer = createReducer(
  initialState,
  on(addRecomendacion, (state, { recomendacion }) => ({
    ...state,
    items: [...state.items, recomendacion]
  })),

  on(deleteRecomendacion, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })),

  on(upvoteRecomendacion, (state, { id }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id ? { ...item, votosPositivos: item.votosPositivos + 1 } : item
    )
  })),

  on(downvoteRecomendacion, (state, { id }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id ? { ...item, votosNegativos: item.votosNegativos + 1 } : item
    )
  }))
);
