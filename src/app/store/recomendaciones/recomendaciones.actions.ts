import { createAction, props } from '@ngrx/store';
import { Recomendacion } from '../../core/models/recomendacion.model';

export const addRecomendacion = createAction(
  '[Recomendaciones] Add Recomendacion',
  props<{ recomendacion: Recomendacion }>()
);

export const deleteRecomendacion = createAction(
  '[Recomendaciones] Delete Recomendacion',
  props<{ id: number }>()
);

export const upvoteRecomendacion = createAction(
  '[Recomendaciones] Upvote Recomendacion',
  props<{ id: number }>()
);

export const downvoteRecomendacion = createAction(
  '[Recomendaciones] Downvote Recomendacion',
  props<{ id: number }>()
);
