# **Promesas**

El objeto **Promise** (*Promesa*) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

### **Descripcion**

Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún momento en el futuro.

Una **Promesa** se encuentra en uno de los siguientes estados:

- **Pendiente** (*pending*): estado inicial, no cumplida o rechazada.
- **Cumplida** (*fulfilled*): significa que la operación se completó satisfactoriamente.
- **Rechazada** (*rejected*): significa que la operación falló.

Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error). Cuando cualquiera de estas dos opciones sucede, los métodos asociados, encolados por el método then de la promesa, son llamados. (Si la promesa ya ha sido cumplida o rechazada en el momento que es anexado su correspondiente manejador, el manejador será llamado, de tal manera que no exista una condición de carrera entre la operación asíncrona siendo completada y los manejadores siendo anexados)

### **Metodos**

#### **Promise.all(iterable)**
Devuelve una de dos promesas: una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas, o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada. Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable. Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas.

#### **Promise.race(iterable)**
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

#### **Promise.reject(reason)**
Devuelve un objeto Promise que es rechazado con la razón dada.

#### **Promise.resolve(value)**
Devuelve un objeto Promise que es resuelto con el valor dado. Si el valor es un thenable (p.ej. tiene un método then), la promesa devuelta "seguirá" este thenable, adoptando su eventual estado; de lo contrario la promesa devuelta será cumplida con el valor. Generalmente, si se quiere saber si un valor es una promesa o no, se podría usar - Promise.resolve(value) y trabajar con el valor devuelto como una promesa.


### *Mas informacion*

[Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)