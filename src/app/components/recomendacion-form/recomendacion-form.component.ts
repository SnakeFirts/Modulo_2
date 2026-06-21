import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recomendacion, CategoriaRecomendacion } from '../../core/models/recomendacion.model';
import { rangoAnioValidator } from '../../core/validators/custom-validators';

@Component({
  selector: 'app-recomendacion-form',
  templateUrl: './recomendacion-form.component.html',
  styleUrls: ['./recomendacion-form.component.css']
})
export class RecomendacionFormComponent {

  // @Output + EventEmitter: este componente hijo emite el evento hacia el componente padre
  // cada vez que se crea una nueva recomendación.
  @Output() recomendacionCreada: EventEmitter<Recomendacion> = new EventEmitter<Recomendacion>();

  formGroup: FormGroup;

  readonly anioMinimo = 1950;
  readonly anioMaximo = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder) {
    // Configuración del formGroup a partir del formBuilder, con al menos 2 controles.
    // El campo "titulo" usa required + minLength.
    // El campo "anio" usa required + el validador personalizado y parametrizable rangoAnioValidator.
    this.formGroup = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['Anime' as CategoriaRecomendacion, [Validators.required]],
      autor: ['', [Validators.required]],
      anio: ['', [Validators.required, rangoAnioValidator(this.anioMinimo, this.anioMaximo)]],
      comentario: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Método auxiliar usado en el HTML junto con *ngIf para mostrar mensajes de error
  // solo cuando corresponde (control tocado/modificado + con el error indicado).
  hasError(controlName: string, errorName: string): boolean {
    const control = this.formGroup.get(controlName);
    if (!control) {
      return false;
    }
    return control.hasError(errorName) && (control.touched || control.dirty);
  }

  enviar(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const valores = this.formGroup.value;

    const nuevaRecomendacion: Recomendacion = {
      id: Date.now(),
      titulo: valores.titulo,
      categoria: valores.categoria,
      autor: valores.autor,
      anio: Number(valores.anio),
      comentario: valores.comentario,
      votosPositivos: 0,
      votosNegativos: 0
    };

    // Emitimos el evento con la nueva recomendación hacia el componente padre
    this.recomendacionCreada.emit(nuevaRecomendacion);

    this.formGroup.reset({ categoria: 'Anime' });
  }
}
