import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangoAnioValidator(anioMin: number, anioMax: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;

    if (valor === null || valor === '' || valor === undefined) {
      return null;
    }

    const anio = Number(valor);

    if (isNaN(anio)) {
      return { rangoAnio: { anioMin, anioMax, motivo: 'no-numerico' } };
    }

    if (anio < anioMin || anio > anioMax) {
      return { rangoAnio: { anioMin, anioMax, valorActual: anio } };
    }

    return null;
  };
}

export function nombrePropioValidator(longitudMinima: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor: string = (control.value || '').trim();

    if (!valor) {
      return null;
    }

    const contieneNumeros = /\d/.test(valor);
    if (contieneNumeros) {
      return { nombrePropio: { motivo: 'contiene-numeros' } };
    }

    if (valor.length < longitudMinima) {
      return { nombrePropio: { motivo: 'muy-corto', longitudMinima, longitudActual: valor.length } };
    }

    return null;
  };
}
