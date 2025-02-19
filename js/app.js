const hamburguerMenu = document.querySelector('.hamburguer-menu');
const navMenu = document.querySelector('.nav-menu');
const enlaces = document.querySelectorAll('.nav-menu a');
const fecha = document.querySelector('.fecha');
const funcionsmooth = document.querySelectorAll('a[href^="#"]');


document.addEventListener('DOMContentLoaded', () => { 
    showMenu(); 
    closeMenu();
    fechaActual();
});

function showMenu() {
    hamburguerMenu.addEventListener('click', () =>{
      navMenu.classList.toggle('hide');
    } );
}

function closeMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', (e) =>{
            console.log(e.target.tagName);
    if(e.target.tagName === 'A'){
             navMenu.classList.add('hide');
            }
        });
    });
}

function fechaActual(){
    const date = new Date();
    const year = date.getFullYear();
    fecha.textContent = year;
}



// Añadimos un evento click para cada enlace
funcionsmooth.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        // Prevenimos el comportamiento por defecto (desplazamiento instantáneo)
        e.preventDefault();

        // Obtenemos el destino del enlace (la sección)
        const destino = document.querySelector(this.getAttribute('href'));

        // Desplazamos la página suavemente a la posición del destino
        destino.scrollIntoView({behavior: 'smooth'});
    });
});
/*
¡Claro! La línea de código:

```javascript
const funcionsmooth = document.querySelectorAll('a[href^="#"]');
```

Vamos a desglosarlo paso a paso:

### 1. **`document.querySelectorAll()`**
   - **`querySelectorAll()`** es un método de `document` que se usa para seleccionar todos los elementos del DOM que coinciden con el selector que pases como argumento.
   - Devuelve una **NodeList** (una colección de nodos) que contiene todos los elementos que coinciden.

### 2. **`'a[href^="#"]'`**
   - Este es el **selector CSS** que le estamos pasando a `querySelectorAll()`.
   - **`a`**: significa que estamos buscando todos los elementos `<a>` (enlaces) dentro del HTML.
   - **`[href^="#"]`**: Es un atributo selector. `href` es el atributo de los enlaces `<a>`, y `^="..."` es un selector que busca los elementos cuyo valor del atributo `href` **empieza con** el valor que está dentro de las comillas.
     - En este caso, **`href^="#"`** significa "todos los enlaces `<a>` cuyo atributo `href` empiece con `#`", lo cual normalmente corresponde a los enlaces internos de la misma página (por ejemplo, `#seccion1`, `#contacto`).

### Resultado:
Este selector selecciona todos los enlaces `<a>` en la página que están dirigidos a secciones dentro de la misma página, es decir, los enlaces con un `href` que empiece con `#`.

Por ejemplo, en tu código, los enlaces en el menú de navegación serían seleccionados porque tienen `href="#inicio"`, `href="#quienes"`, `href="#especialidades"`, etc.

### 3. **`const funcionsmooth`**
   - Se está declarando una constante llamada `funcionsmooth` que almacenará la lista de los elementos seleccionados con el método `querySelectorAll()`.

En resumen, esta línea selecciona todos los enlaces en tu página que tienen un `href` que apunta a una sección interna de la misma página (es decir, aquellos cuyo `href` empieza con `#`) y los guarda en la constante `funcionsmooth` para que luego puedas aplicarles alguna acción, como el "smooth scroll".

Si tienes más preguntas sobre esta sintaxis o cómo usarlo, ¡no dudes en preguntar!
*/