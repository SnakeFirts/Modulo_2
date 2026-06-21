import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validador personalizado y PARAMETRIZABLE.
 * Verifica que el valor numérico de un control esté dentro de un rango [min, max].
 * Se usa, por ejemplo, para validar el año de una recomendación (entre 1900 y el año actual).
 *
 * Uso: rangoAnioValidator(1900, 2026)
 */
export function rangoAnioValidator(anioMin: number, anioMax: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;

    // Si está vacío, dejamos que el validador "required" se encargue
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

/**
 * Validador personalizado y PARAMETRIZABLE.
 * Verifica que el texto tenga al menos `longitudMinima` caracteres SIGNIFICATIVOS
 * (sin contar espacios al inicio/fin) y que no contenga números.
 *
 * Uso: nombrePropioValidator(3)
 */
export function nombrePropioValidator(longitudMinima: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor: string = (control.value || '').trim();

    if (!valor) {
      return null; // required se encarga del caso vacío
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
