# Evidencia 5 — Frameworks CSS

**Alumno:** Joel Humberto Solis Ramírez · **Matrícula:** 27437 · **Grupo:** DSM4

## Propósito

Comparar Bootstrap, Tailwind CSS y Foundation para justificar la elección tecnológica del proyecto empresarial.

## ¿Qué es un framework CSS?

Es una base reutilizable de estilos, utilidades, cuadrícula y, según la herramienta, componentes interactivos. Puede acelerar prototipos y mejorar consistencia, pero no reemplaza HTML semántico, diseño accesible ni pruebas. Antes de adoptarlo se evalúan personalización, peso, dependencias, documentación y experiencia del equipo.

## Comparación resumida

| Criterio | Bootstrap | Tailwind CSS | Foundation |
|---|---|---|---|
| Enfoque | Componentes y utilidades | Utilidades para componer diseños | Base configurable y componentes |
| Inicio | Muy rápido | Rápido con configuración de construcción | Intermedio |
| Componentes | Amplio catálogo | No son el objetivo del núcleo | Catálogo amplio |
| Grid | 12 columnas y breakpoints | Utilidades Grid/Flex | XY Grid |
| Personalización | Variables CSS y Sass | Muy alta por tokens/utilidades | Alta mediante Sass |
| JavaScript | Componentes interactivos | No requerido para utilidades | Componentes interactivos |
| Riesgo | Aspecto genérico y código no usado | Marcado con muchas clases | Menor ecosistema y curva de aprendizaje |

## Bootstrap

Adecuado para sitios corporativos, paneles y prototipos. Incluye navbar, cards, formularios, modal, accordion, alerts, offcanvas y otros componentes. Su grid usa `container`, `row` y `col-*`. Ventajas: rapidez, documentación y consistencia. Desventajas: apariencia reconocible si no se personaliza y posible carga innecesaria al importar todo.

Documentación: <https://getbootstrap.com/docs/>

## Tailwind CSS

Framework utility-first para construir una identidad propia mediante clases pequeñas. Es apropiado para productos y sistemas de diseño personalizados. Ofrece gran control y optimización del CSS usado; como costo, el marcado puede volverse extenso y los patrones repetidos requieren abstracción. Su núcleo no ofrece un catálogo completo como Bootstrap.

Documentación: <https://tailwindcss.com/docs>

## Foundation

Foundation for Sites ofrece cuadrícula XY, utilidades responsivas, componentes y complementos JavaScript. Es flexible y configurable, pero tiene una comunidad y cantidad de ejemplos más reducidas que Bootstrap. Puede requerir mayor aprendizaje inicial.

Documentación: <https://get.foundation/sites/docs/>

## Decisión para el proyecto

Se elige **Bootstrap** porque el proyecto académico de una empresa tecnológica necesita construir rápidamente navegación, tarjetas, botones, formulario y cuadrícula adaptable. Las clases responsivas hacen visible el enfoque Mobile First y reducen CSS de distribución. Para evitar un resultado genérico se complementa con estilos propios y se conservan criterios de semántica, foco, contraste y rendimiento.

## Consulta completa

- [Parte XI. Investigación y tabla comparativa](../preguntas/investigacion-y-reflexion.html#parte-xi)
- [Reflexión final: 15 respuestas](../preguntas/investigacion-y-reflexion.html#reflexion)
- [Bibliografía oficial](../preguntas/investigacion-y-reflexion.html#bibliografia)
