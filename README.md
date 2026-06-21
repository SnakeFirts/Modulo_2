# 🎌 Foro de Recomendaciones — Anime & Música

Proyecto final del módulo de **Angular**: arquitectura basada en componentes, formularios reactivos y aplicaciones reactivas con **Redux (NgRx)**. Diseño visual con **Bootstrap 5** (degradados, sombras, paleta personalizada).

## 🚀 Cómo correrlo

```bash
npm install
ng serve
```

Luego abrir `http://localhost:4200/`.

## 🧩 Stack

- Angular 17 (NgModule clásico, no standalone)
- @ngrx/store 17 (Redux)
- Bootstrap 5 + Bootstrap Icons
- Reactive Forms (`ReactiveFormsModule`, `FormBuilder`)

## 📍 Mapeo de requisitos de la actividad

| # | Requisito | Dónde se cumple |
|---|-----------|-----------------|
| 1 | `EventEmitter` decorado con `@Output` | `components/recomendacion-form/recomendacion-form.component.ts` → `recomendacionCreada` |
| 2 | Rutas con `redirectTo` y con `component` | `app-routing.module.ts` (`path: ''` con redirect a `home`, `path: 'home'` con component) |
| 3 | `router-outlet` raíz | `app.component.html` |
| 4 | `formGroup` configurado en constructor vía `FormBuilder`, 2+ controles | `recomendacion-form.component.ts` (5 controles) y `profile-form/perfil-form.component.ts` (2 controles) |
| 5 | Controles vinculados a `input type="text"` | `recomendacion-form.component.html` y `perfil-form.component.html` (`formControlName`) |
| 6 | Componente padre con `@Output` que recibe evento de un hijo con formulario | `components/home/home.component.ts` (`alRecibirRecomendacion`) recibe el evento de `app-recomendacion-form` en `home.component.html` |
| 7 | Formulario con `required` + validación personalizada parametrizable | `core/validators/custom-validators.ts` → `rangoAnioValidator(min, max)` (usado en año de la recomendación) y `nombrePropioValidator(longitudMinima)` (usado en el nombre del perfil) |
| 8 | `*ngIf` + método `hasError` para mensajes de error | Visible en `recomendacion-form.component.html` y `perfil-form.component.html` |
| 9 | Reducer con 2 actions (agregar / borrar) | `store/recomendaciones/recomendaciones.actions.ts` y `.reducer.ts` → `addRecomendacion`, `deleteRecomendacion` |
| 10 | Voto a favor / en contra con contador propio por elemento | `store/recomendaciones/recomendaciones.actions.ts` → `upvoteRecomendacion`, `downvoteRecomendacion`; UI en `recomendacion-list.component.html` |

## 📁 Estructura

```
src/app/
├── core/
│   ├── models/recomendacion.model.ts
│   └── validators/custom-validators.ts
├── store/
│   ├── app.state.ts
│   └── recomendaciones/
│       ├── recomendaciones.actions.ts
│       └── recomendaciones.reducer.ts
├── components/
│   ├── home/                  (padre: contiene form + list)
│   ├── about/                 (página "Nosotros")
│   ├── profile-form/          (formulario de perfil)
│   ├── recomendacion-form/    (hijo: crea recomendaciones)
│   └── recomendacion-list/    (lista conectada al store, votos)
├── app.module.ts
├── app-routing.module.ts
└── app.component.ts / .html
```

## ✨ Funcionalidad

- Crear una recomendación de anime o música desde un formulario (componente hijo) que emite el evento hacia el padre, el cual despacha la acción a NgRx.
- Listado de recomendaciones reactivo, conectado al store con `Store.select`.
- Votar a favor 👍 o en contra 👎 cada recomendación, con contador independiente por elemento y puntaje neto.
- Eliminar recomendaciones de la colección.
- Formulario de perfil con validación personalizada y parametrizable.
- Navegación con rutas (`/home`, `/nosotros`) y redirect desde la raíz.
