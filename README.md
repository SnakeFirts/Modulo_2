# 🎌 Foro de Recomendaciones — Anime & Música

Proyecto final del módulo de **Angular**: arquitectura basada en componentes, formularios reactivos y aplicaciones reactivas con **Redux (NgRx)**. Diseño visual con **Bootstrap 5** (degradados, sombras, paleta personalizada).

## 🚀 Cómo correrlo

```bash
npm install
ng serve
```

Luego abrir `http://localhost:4200/`.

## Funcionalidad

- Crear una recomendación de anime o música desde un formulario (componente hijo) que emite el evento hacia el padre, el cual despacha la acción a NgRx.
- Listado de recomendaciones reactivo, conectado al store con `Store.select`.
- Votar a favor  o en contra cada recomendación, con contador independiente por elemento y puntaje neto.
- Eliminar recomendaciones de la colección.
- Formulario de perfil con validación personalizada y parametrizable.
- Navegación con rutas (`/home`, `/nosotros`) y redirect desde la raíz.
