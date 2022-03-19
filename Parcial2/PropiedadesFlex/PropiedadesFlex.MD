# *Propiedades Flex*

Mas informacion sobre las propiedades Flexbox:

[Propiedades Flexbox](https://desarrolloweb.com/articulos/propiedades-contenedor-flexbox.html)

Cuando una caja contiene otros elementos dentro y a esta caja contenedora le ponemos la propiedad display a flex le damos la habilidad de modificar el tamaño y orden de sus elementos internos

Esto se hace dándole valor a una serie de propiedades.

Existen propiedades para el padre y propiedades para los hijos, como estas:


## Propiedades para el padre

| Propiedad | Valor | Descripcion |
| -- | -- | -- |
| display |  | Declarar un contenedor como flex |
|  | flex | De bloque, ocupara todo el ancho del padre |
|  | inline-flex | De linea, el ancho lo define el contenido |
| flex-direction |  | Establecer el eje principal|
|  | row | Izquierda a derecha |
|  | row-reverse | Derecha a izquierda |
|  | colum | De arriba a abajo |
|  | colum-reverse | De abajo a arriba |
| flex-wrap |  | Evitar o permitir desbordamiento (cambio de linea) |
|  | no-wrap | No permite desbordamiento. Todos los hijos en una sola linea |
|  | wrap | Si permite desbordamiento. Puede hacer cambio de linea |
|  | wrap-reverse | Si permite desbordamiento. Pero en orden inverso |
| flex-flow |  | Abreviacion de flex-direction y flex-wrap |
|  | row nowrap | Valor por defecto |
| justify-content |  | Alineacion en el eje principal |
|  | flex-start | Desde al inicio flex-direction |
|  | flex-end | Desde al final flex-direction |
|  | center | Centrara las cajas |
|  | space-between | Existira una unidad de espacio a cada lado de las cajas |
|  | space-evenly | Espacio entre cajas y con los bordes del contenedor sera igual |
| algin-items |  | Acomoda los hijos en el eje transversal (perpendicular al principal) |
|  | stretch | Llenara el contenedor padre (default) |
|  | flex-start | Al inicio del eje transversal |
|  | flex-end | Al final del eje transversal |
|  | center | Los centrara en el eje transversal |
|  | baseline | Se refiere a la linea en la que se sientan las fuentes |


## Propiedades para el hijo

| Propiedad | Valor | Descripcion |
| -- | -- | -- |
| order |  | Controla el orden en que se desplegaran los hijos |
|  | 0-n | El default es cero, el orden sera el declarado en html |
| flex-grow |  | Establece la habilidad del hijo para crecer |
|  | 1-n | Por default todos son un 1, n sera un valor de proporcion |
| flex-shrink |  | Establece la habilidad del hijo para encogerse |
|  | 1-n | Por default todos son 1, n sera un valor de proporcion |
| flex-basis |  | Tamaño default para un elemento antes de que el espacio restante sea distribuido. Puede ser en porcentaje |
|  | auto | Deacuerdo a las propiedades width y height |
|  | content | Deacuerdo al contenido |
| flex |  | Abreviacion para flex-grow, flex-shrink y flex-basis |