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
  @Output() recomendacionCreada: EventEmitter<Recomendacion> = new EventEmitter<Recomendacion>();

  formGroup: FormGroup;

  readonly anioMinimo = 1950;
  readonly anioMaximo = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['Anime' as CategoriaRecomendacion, [Validators.required]],
      autor: ['', [Validators.required]],
      anio: ['', [Validators.required, rangoAnioValidator(this.anioMinimo, this.anioMaximo)]],
      comentario: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

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
    
    this.recomendacionCreada.emit(nuevaRecomendacion);

    this.formGroup.reset({ categoria: 'Anime' });
  }
}
