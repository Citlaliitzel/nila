# *Bubbling*

Proceso de captura y propagacion

## Captura

Hay otra fase en el procesamiento de eventos llamada “captura”. Es raro usarla en código real, pero a veces puede ser útil.

El estándar de eventos del DOM describe 3 fases de la propagación de eventos:

1. Fase de captura – el evento desciende al elemento.
2. Fase de objetivo – el evento alcanza al elemento.
3. Fase de propagación – el evento se propaga hacia arriba del elemento.

## Propagación
El principio de propagación es simple.

Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.

Digamos que tenemos 3 elementos anidados FORM > DIV > P con un manejador en cada uno de ellos:

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
Un clic en el elemento del interior ```<p>``` primero ejecuta onclick:

En ese ```<p>```.
Luego en el ```<div>``` de arriba.
Luego en el ```<form>``` de más arriba.
Y así sucesivamente hasta el objeto document.

Así si hacemos clic en ```<p>```, entonces veremos 3 alertas: p → div → form.

Este proceso se conoce como “propagación” porque los eventos “se propagan” desde el elemento más al interior, a través de los padres, como una burbuja en el agua.

## Para mas informacion sobre el Bubbling:

[Bubbling](https://es.javascript.info/bubbling-and-capturing)