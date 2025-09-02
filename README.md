# m6ae1-abp1 - Tabla de Usuarios con Vue.js y Bootstrap

Este proyecto es una tabla de usuarios desarrollada con **Vue.js 3** y **Bootstrap 5**, que muestra datos de tres personas de forma reactiva. Cumple con los requerimientos de estilo, estructura y buenas prácticas de desarrollo frontend.

## 📋 Descripción

Se muestra una tabla con los siguientes datos de tres personas:
- Nombre
- Apellido
- Fecha de nacimiento
- Edad

Los datos están almacenados en la propiedad `data` de la instancia de Vue y se renderizan dinámicamente usando `v-for`.

## 🛠️ Tecnologías utilizadas

- **Vue.js 3** (con Vite)
- **Bootstrap 5** (CDN o instalado)
- **HTML5**
- **CSS3**
- **ES6+**
- **npm**

## 🚀 Cómo ejecutar el proyecto

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/es/download) (versión 16 o superior).
2. Clona o descarga este repositorio.
3. Abre la terminal en la carpeta del proyecto.
4. Instala las dependencias:

5.   Se creó el proyecto en Vue.js utilizando `CLI` con el siguiente comando
 ```
 npm create nombre_proyecto
 ```
 Luego instalamos las dependencias utilizando npm
```
npm install
```
Ejecutamos el servidor de desarrollo

```
npm run server
```
6. Abre tu navegador en http://localhost:5173 (o el puerto que indique CLI).

## 🧩 Estructura del componente

El componente TablaUsuariosComponent.vue incluye:

- Template: Tabla con clases de Bootstrap (table, table-responsive, w-50, etc.).
- Script: Datos definidos en data() como un array de objetos.
- Style: Estilos con scoped y :deep() para afectar elementos internos de Bootstrap.

## 🔍 Uso de :deep() en estilos
En Vue.js, cuando usamos scoped en `<style>`, los estilos solo afectan al componente actual y no penetran en los estilos aplicados por librerías externas como Bootstrap.

Para poder personalizar estilos en elementos internos (como <th>, <td> o clases como .table), se utiliza :deep(). Esta función permite aplicar estilos a componentes anidados a pesar del aislamiento de scoped.

## 🎨 Estilo aplicado

- Fondo claro (`#fafafa`) en celdas del cuerpo.
- Encabezado en gris medio (`#dddddd`).
- Bordes redondeados y sombra sutil.
- Tabla centrada y con ancho reducido (`w-50`) para mejor legibilidad.


## 📚 Referencias
- Vue.js 3
- Bootstrap 5
- CLI

## 🙌 Créditos
Desarrollado por: Gonzalo Urrutia

Curso: Bootcamp de Desarrollo de Aplicaciones Front-end Trainee de la UNAB.