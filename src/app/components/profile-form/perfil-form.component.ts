import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombrePropioValidator } from '../../core/validators/custom-validators';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent {

  formGroup: FormGroup;

  readonly longitudMinimaNombre = 3;

  guardadoExitoso = false;

  constructor(private formBuilder: FormBuilder) {
    // formGroup configurado desde el constructor a partir de formBuilder,
    // con al menos 2 controles: nombre y bio.
    // "nombre" usa required + el validador personalizado y parametrizable nombrePropioValidator.
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, nombrePropioValidator(this.longitudMinimaNombre)]],
      bio: ['', [Validators.required, Validators.maxLength(160)]]
    });
  }

  // Usado en el HTML junto con *ngIf para mostrar mensajes de error según corresponda
  hasError(controlName: string, errorName: string): boolean {
    const control = this.formGroup.get(controlName);
    if (!control) {
      return false;
    }
    return control.hasError(errorName) && (control.touched || control.dirty);
  }

  guardar(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.guardadoExitoso = false;
      return;
    }

    this.guardadoExitoso = true;
  }
}
