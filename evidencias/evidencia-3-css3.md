# Evidencia 3 — CSS3 y fundamentos de presentación

**Alumno:** Joel Humberto Solis Ramírez · **Matrícula:** 27437 · **Grupo:** DSM4

## Propósito

Resumir cómo CSS controla la presentación del documento y documentar la anatomía de una regla, la cascada, los selectores, las propiedades frecuentes, el modelo de caja y Flexbox.

## CSS y CSS moderno

CSS define color, tipografía, dimensiones, espaciado, fondos y distribución. La separación entre HTML y CSS permite cambiar la apariencia sin perder la semántica. “CSS3” identifica la etapa en que el lenguaje evolucionó en módulos e incorporó media queries, transiciones, transformaciones, Flexbox y otras capacidades; actualmente esos módulos avanzan de forma independiente.

Una regla está formada por selector y declaraciones:

```css
.tarjeta {
  color: #173e54;
  padding: 1rem;
}
```

`.tarjeta` es el selector. `color` y `padding` son propiedades; cada valor completa una declaración. La cascada resuelve conflictos considerando origen, importancia, capas, especificidad y orden. Para mantenerla predecible conviene usar clases y evitar `!important` como solución rutinaria.

## Selectores cubiertos

- universal: `*`;
- tipo: `p`;
- clase: `.boton`;
- identificador: `#contacto`;
- agrupación: `h1, h2, h3`;
- atributos: `[required]`, `[type="email"]`, `[href^="https"]`, `[href$=".pdf"]`, `[href*="docs"]`;
- descendiente: `nav a`;
- hijo: `ul > li`;
- hermano adyacente: `h2 + p`;
- hermanos generales: `h2 ~ p`;
- pseudoclases: `:hover`, `:focus-visible`, `:valid`, `:first-child`, `:nth-child()` y `:not()`;
- pseudoelementos: `::before`, `::after` y `::first-letter`.

## Propiedades y unidades

Las propiedades se agrupan en tipografía, color, tamaño, espaciado, borde, distribución, visibilidad e interacción. Se prefieren unidades relativas cuando el contenido debe escalar: `rem`, `em`, porcentajes y valores fluidos con `clamp()`. Los límites mediante `min-width`, `max-width` y funciones como `min()` evitan diseños rígidos.

## Modelo de caja

Cada elemento contiene cuatro zonas: contenido, `padding`, borde y `margin`. Con `box-sizing: border-box`, el ancho declarado incluye padding y borde, lo que facilita columnas y componentes predecibles:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

El `outline` no ocupa espacio y es especialmente útil para señalar foco. No debe eliminarse si no se proporciona una alternativa visible.

## Flexbox

Flexbox distribuye elementos en una dimensión. En el contenedor se aplican `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap` y `gap`. Los hijos pueden crecer o reducirse con `flex`.

```css
.servicios {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.servicio {
  flex: 1 1 16rem;
}
```

En el proyecto, Flexbox resulta útil para navegación, botones y alineación interna; el grid de Bootstrap organiza las columnas generales.

## Consulta completa

- [Parte IX. CSS y CSS3](../preguntas/investigacion-y-reflexion.html#parte-ix)
- [Parte X. Regla CSS y selectores](../preguntas/investigacion-y-reflexion.html#parte-x)
- [Parte XI. Propiedades, modelo de caja y Flexbox](../preguntas/investigacion-y-reflexion.html#parte-xi)
