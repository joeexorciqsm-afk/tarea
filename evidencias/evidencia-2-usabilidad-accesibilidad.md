# Evidencia 2 — Usabilidad y accesibilidad

**Alumno:** Joel Humberto Solis Ramírez · **Matrícula:** 27437 · **Grupo:** DSM4

## Propósito

Documentar criterios para que el sitio de la empresa tecnológica sea fácil de comprender, eficiente, operable con distintos dispositivos e incluyente para personas con diversas capacidades.

## Conceptos clave

La **usabilidad** mide si una persona puede alcanzar su objetivo con efectividad, eficiencia y satisfacción. La **accesibilidad** busca que el contenido pueda percibirse, operarse y comprenderse, y que sea compatible con tecnologías de asistencia. Se complementan: una interfaz puede cumplir una revisión automática y todavía resultar confusa en una tarea real.

## Reglas aplicadas

1. Mantener una jerarquía lógica de encabezados.
2. Conservar navegación y nombres consistentes.
3. Permitir operar todas las acciones con teclado.
4. Mostrar un foco claramente visible.
5. Cuidar contraste, tamaño y longitud de lectura.
6. Proporcionar alternativas textuales útiles a imágenes informativas.
7. Asociar etiquetas visibles con los controles del formulario.
8. No comunicar estados únicamente mediante color.
9. Escribir errores que indiquen problema y solución.
10. Diseñar objetivos táctiles cómodos y separados.
11. Permitir zoom y reflujo sin desplazamiento horizontal innecesario.
12. Respetar preferencias de movimiento reducido.
13. Usar lenguaje directo y términos consistentes.
14. Preferir controles HTML nativos antes de recrearlos con elementos genéricos.

## Método de comprobación

La revisión combina herramientas y pruebas manuales: recorrido completo con teclado, foco en orden, zoom al 200 %, contraste, lector de pantalla, texto alternativo, estados de error, orientación vertical/horizontal y auditoría automática. Las herramientas encuentran ciertos fallos de código, pero una persona debe evaluar si el contenido y los mensajes tienen sentido.

## Análisis de referencia: Wikipedia en español

### Cinco puntos positivos

- Propósito, búsqueda y título fáciles de reconocer.
- Encabezados e índice útiles en contenido extenso.
- Convenciones de navegación consistentes.
- Uso frecuente de estructura semántica, leyendas y referencias.
- Presentación adaptable y centrada en lectura.

### Cinco oportunidades de mejora

- Reducir la carga cognitiva en artículos con muchos avisos y controles.
- Mejorar el reflujo de tablas e infoboxes complejas.
- Homogeneizar la calidad del texto alternativo aportado por la comunidad.
- Ofrecer resúmenes iniciales más sencillos en temas especializados.
- Reducir el esfuerzo de navegación por teclado con saltos y landmarks consistentes.

## Aplicación al proyecto

La página empresarial debe priorizar servicios y contacto, limitar acciones secundarias y mantener mensajes claros. Bootstrap ofrece bases útiles para controles y distribución, pero no garantiza accesibilidad automáticamente: nombres, estados, foco, orden del DOM y pruebas siguen siendo responsabilidad del equipo.

## Consulta completa

- [Parte VII. Usabilidad y accesibilidad](../preguntas/investigacion-y-reflexion.html#parte-vii)
- [Parte VIII. Análisis de Wikipedia](../preguntas/investigacion-y-reflexion.html#parte-viii)
