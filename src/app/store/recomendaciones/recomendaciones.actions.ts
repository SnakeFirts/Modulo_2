import { createAction, props } from '@ngrx/store';
import { Recomendacion } from '../../core/models/recomendacion.model';

// Acción para AGREGAR una recomendación a la colección
export const addRecomendacion = createAction(
  '[Recomendaciones] Add Recomendacion',
  props<{ recomendacion: Recomendacion }>()
);

// Acción para BORRAR una recomendación de la colección
export const deleteRecomendacion = createAction(
  '[Recomendaciones] Delete Recomendacion',
  props<{ id: number }>()
);

// Acción para sumar un voto positivo (upvote) a un elemento del listado
export const upvoteRecomendacion = createAction(
  '[Recomendaciones] Upvote Recomendacion',
  props<{ id: number }>()
);

// Acción para sumar un voto negativo (downvote) a un elemento del listado
export const downvoteRecomendacion = createAction(
  '[Recomendaciones] Downvote Recomendacion',
  props<{ id: number }>()
);
