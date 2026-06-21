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
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, nombrePropioValidator(this.longitudMinimaNombre)]],
      bio: ['', [Validators.required, Validators.maxLength(160)]]
    });
  }
  
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
