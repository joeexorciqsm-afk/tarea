# Evidencia 4 — Diseño responsivo y Mobile First

**Alumno:** Joel Humberto Solis Ramírez · **Matrícula:** 27437 · **Grupo:** DSM4

## Propósito

Documentar cómo el sitio conserva contenido, legibilidad y operación en móvil, tableta y escritorio mediante un enfoque Mobile First.

## Principios

El diseño responsivo adapta distribución y controles a las condiciones disponibles. No consiste únicamente en reducir tamaños: debe conservar orden lógico, lectura, foco, interacción táctil y prioridad del contenido. Sus bases son:

- `meta viewport` correctamente declarado;
- contenedores fluidos con ancho máximo;
- imágenes con `max-width: 100%` y altura automática;
- unidades relativas;
- Flexbox o Grid para distribución flexible;
- media queries definidas cuando el contenido lo necesita;
- contenido y controles esenciales disponibles en cualquier vista.

## Mobile First

Los estilos base resuelven primero una pantalla estrecha. Después, las consultas con `min-width` agregan columnas o espacio cuando cabe el contenido:

```css
.tarjetas {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 48rem) {
  .tarjetas { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 64rem) {
  .tarjetas { grid-template-columns: repeat(3, 1fr); }
}
```

Los breakpoints no representan modelos específicos de teléfono: se colocan donde la composición comienza a fallar. Además del ancho, puede consultarse orientación, tipo de puntero, contraste o preferencia de movimiento.

## Pruebas conceptuales

### Móvil: 320–767 px

Se espera una columna, navegación expandible accesible, campos a ancho completo y botones cómodos. Se comprueba ausencia de desplazamiento horizontal, funcionamiento con teclado virtual, orden del foco, mensajes de error y zoom.

### Tableta: 768–1023 px

Se esperan una o dos columnas según el contenido, navegación compacta y espacios intermedios. Se prueba orientación vertical y horizontal, reflujo de tablas, imágenes sin deformación y controles táctiles separados.

### Escritorio: 1024 px o más

Puede mostrarse navegación horizontal, hero en columnas y tres tarjetas. Se revisan líneas de lectura no excesivas, uso completo con teclado, zoom al 200 %, foco visible y anclas no ocultas por una cabecera fija.

## Casos adicionales

También deben probarse textos largos, ampliación, traducciones, imágenes ausentes, conexiones lentas y `prefers-reduced-motion`. Un orden visual distinto no debe contradecir el orden del DOM, porque teclado y lector de pantalla siguen la estructura del documento.

## Bootstrap en el proyecto

Las clases `col-12`, `col-md-6` y `col-lg-4` permiten pasar de una a dos y tres columnas de manera progresiva. El framework simplifica la cuadrícula, pero las decisiones sobre prioridades, contenido, tamaños táctiles y puntos de quiebre continúan siendo parte del diseño.

## Consulta completa

- [Parte XI, apartado de diseño responsivo, Mobile First y media queries](../preguntas/investigacion-y-reflexion.html#parte-xi)
- [Reflexión final del proyecto](../preguntas/investigacion-y-reflexion.html#reflexion)
