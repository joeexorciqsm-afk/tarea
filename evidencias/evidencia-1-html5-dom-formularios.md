# Evidencia 1 — HTML5, DOM y formularios

**Alumno:** Joel Humberto Solis Ramírez · **Matrícula:** 27437 · **Grupo:** DSM4

## Propósito

Esta evidencia reúne los fundamentos que sostienen la estructura del proyecto web: HTML5, el árbol DOM, las etiquetas semánticas, los metadatos y la captura validada de datos mediante formularios.

## Síntesis de aprendizaje

HTML5 describe la estructura y el significado del contenido. No sustituye a CSS ni a JavaScript: HTML organiza, CSS presenta y JavaScript agrega comportamiento. Una base correcta incluye `<!doctype html>`, el idioma `lang="es-MX"`, codificación UTF-8, viewport, un título descriptivo y contenido dentro de `body`.

El DOM es la representación en memoria que el navegador construye a partir del HTML. Forma un árbol de nodos con relaciones de padre, hijos y hermanos. Gracias a esta interfaz, JavaScript puede seleccionar un campo, cambiar una clase, actualizar texto o reaccionar a un evento sin reescribir el documento completo.

Las etiquetas semánticas comunican propósito: `header` introduce; `nav` agrupa navegación relevante; `main` contiene el contenido principal; `section` agrupa un tema; `article` representa una unidad autónoma; `aside` aporta información complementaria; y `footer` cierra una página o sección. `div` se reserva para agrupaciones sin una semántica más específica.

Los metadatos se ubican en `head`. `charset` evita problemas con caracteres; `viewport` permite adaptación móvil; `title` identifica la pestaña y el resultado de búsqueda; y `description` resume la página. Los metadatos apoyan la interpretación, pero no compensan un documento desordenado.

## Formulario y validación

Un formulario accesible debe:

- asociar cada `label` con su control mediante `for` e `id`;
- asignar `name` a los campos que se enviarán;
- emplear tipos adecuados como `email`, `tel` o `date`;
- declarar restricciones con `required`, `minlength`, `maxlength`, `min`, `max` o `pattern`;
- explicar formatos y mostrar errores específicos junto al campo;
- conservar datos correctos después de un error;
- usar `autocomplete` cuando ayude a completar la tarea;
- validar nuevamente en el servidor.

La validación nativa mejora la respuesta inmediata, pero no es una medida de seguridad suficiente. En una aplicación real, el servidor debe comprobar datos, permisos e integridad antes de procesarlos.

## Aplicación al proyecto

Para la página de una empresa tecnológica, la estructura recomendada contiene navegación principal, presentación de servicios, información corporativa, formulario de contacto y pie. El formulario puede recopilar nombre, correo, servicio de interés y descripción del proyecto, solicitando únicamente la información necesaria.

## Consulta completa

- [Parte I. HTML5](../preguntas/investigacion-y-reflexion.html#parte-i)
- [Parte II. DOM y diagrama](../preguntas/investigacion-y-reflexion.html#parte-ii)
- [Parte III. Etiquetas estructurales](../preguntas/investigacion-y-reflexion.html#parte-iii)
- [Parte IV. Etiquetas de presentación](../preguntas/investigacion-y-reflexion.html#parte-iv)
- [Parte V. Metadatos](../preguntas/investigacion-y-reflexion.html#parte-v)
- [Parte VI. Formularios y validación](../preguntas/investigacion-y-reflexion.html#parte-vi)
