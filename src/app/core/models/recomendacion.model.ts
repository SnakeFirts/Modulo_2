export type CategoriaRecomendacion = 'Anime' | 'Música';

export interface Recomendacion {
  id: number;
  titulo: string;
  categoria: CategoriaRecomendacion;
  autor: string;
  comentario: string;
  anio: number;
  votosPositivos: number;
  votosNegativos: number;
}
