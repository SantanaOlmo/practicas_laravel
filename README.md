# Documentación de la Práctica

A continuación se detallan los pasos exactos seguidos para realizar esta práctica y configurar el entorno de desarrollo.

## 1. Creación de la Actividad 1 (`act1`)
1.  **Creación del archivo**: Primero creé el archivo `Welcome.jsx` dentro de la carpeta `act1`.
2.  **Lógica del componente**:
    -   Dentro del archivo, definí las variables `nombreUsuario` y `tareasPendientes` antes del `return`.
    -   Añadí la lógica para mostrar la fecha actual.
3.  **Renderizado (JSX)**:
    -   Utilicé llaves `{ }` para mostrar las variables en el HTML.
    -   Usé el método `.map()` para recorrer el array de tareas y crear la lista `<ul>`.
    -   Apliqué la condición ternaria: si la tarea contiene "Laravel", cambié el estilo a azul.

## 2. Creación de la Actividad 2 (`act2`)
1.  **Nueva carpeta**: Creé una carpeta llamada `act2`.
2.  **Duplicación**: Copié el archivo `Welcome.jsx` en esta nueva carpeta para tener una versión independiente del ejercicio.

## 3. Configuración del Entorno (Para verlo en el navegador)
Para no depender de un servidor externo, configuré un entorno local con Vite y Tailwind:

1.  **Instalación de Vite**: Creé los archivos de configuración de Vite (`vite.config.js`) y el `package.json` con las dependencias necesarias (`react`, `react-dom`, `vite`).
2.  **Configuración de Tailwind**:
    -   Creé `tailwind.config.js` y `postcss.config.js`.
    -   En `index.css` añadí las directivas de `@tailwind`.
3.  **Punto de entrada**:
    -   Creé el `index.html` en la raíz.
    -   Creé el `main.jsx` para "inyectar" el componente `Welcome.jsx` de la **act1** en el HTML.

## 4. Ejecución
Finalmente, para ver el resultado:
1.  Ejecuté el comando `npm install` para descargar las librerías.
2.  Ejecuté **`npm run dev`** para iniciar el servidor local.
3.  Abrí el navegador en la dirección local (por defecto `http://localhost:5173`) para ver la actividad funcionando.
