# Documentación de la Práctica: TaskHub

![taskhub](assets/taskhub.png)

A continuación se detalla el proceso completo seguido para la **Actividad 1** y **Actividad 2**, basándonos en el stack Laravel + React + Tailwind.

## 1. Preparación de la "Caja de Herramientas"
El primer paso fue asegurar que el entorno estuviera listo:
1.  **XAMPP**: Iniciado (Apache y MySQL en verde).
2.  **Composer**: Verificado que estaba instalado y accesible desde la terminal.
3.  **Base de Datos**: Se creó una base de datos vacía llamada `taskhub` en `localhost/phpmyadmin`.

## 2. Instalación de la Estructura (Frameworks)
Invocamos la estructura del proyecto Laravel mediante Composer:
```bash
composer create-project laravel/laravel taskhub
cd taskhub
```
*Nota*: Se verificó la habilitación de extensiones (`php_fileinfo`, etc.) en el `php.ini` para evitar errores.

## 3. Conexión de Cables (Configuración DB)
Configuramos la conexión entre Laravel y MySQL editando el archivo `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=taskhub
DB_USERNAME=root
DB_PASSWORD=
```
Ejecutamos la migración para crear las tablas base:
```bash
php artisan migrate
```

## 4. El Ciclo de Desarrollo (Doble Motor)
Para trabajar, mantenemos dos terminales abiertas:
1.  **Backend (Laravel)**: `php artisan serve` (Servidor en puerto 8000).
2.  **Frontend (Vite/React)**:
    -   Instalación de Breeze y React:
        ```bash
        composer require laravel/breeze --dev
        php artisan breeze:install react
        npm install
        ```
    -   Ejecución del compilador: `npm run dev`.

## 5. El "Hola Mundo" en React + Tailwind (Actividad 1)
Modificamos el archivo `resources/js/Pages/Welcome.jsx` implementando:
-   Variables dinámicas (`nombreUsuario = "Alberto"`).
-   Array de tareas (`tareasPendientes`).
-   Uso de `.map()` para iterar la lista.
-   Estilos condicionales (Color azul si la tarea contiene "Laravel").

El código resultante se ha guardado en la carpeta `act1/Welcome.jsx` de este repositorio.

## 6. Realización de la Actividad 2: De Diseño Estático a Dinámico
Para esta actividad, transformamos el diseño "muerto" en una interfaz reactiva.

### Pasos realizados:

1.  **Definición de Variables (PHP vs JS)**:
    -   En lugar de usar PHP (`$variable`), declaramos constantes dentro de la función del componente `Welcome`:
        ```javascript
        const nombreUsuario = "Alberto"; // Variable simple
        const tareasPendientes = ["Instalar Laravel", "Configurar React", ...]; // Array
        ```

2.  **Interpolación en HTML**:
    -   Sustituimos los textos estáticos por variables usando llaves `{ }`.
    -   Ejemplo: `<h1>TaskHub de {nombreUsuario}</h1>` muestra el nombre dinámicamente.

3.  **Renderizado de Listas (El sustituto del `foreach`)**:
    -   Usamos el método `.map()` para recorrer el array `tareasPendientes`.
    -   Por cada tarea, generamos un `<li>` automáticamente:
        ```javascript
        {tareasPendientes.map((tarea, index) => (
            <li key={index}>...</li>
        ))}
        ```

4.  **Lógica Condicional (Estilos Dinámicos)**:
    -   Implementamos un operador ternario para cambiar el color si la tarea es importante (ej. contiene "Laravel").
    -   Código usado:
        ```javascript
        className={`... ${tarea.includes("Laravel") ? "text-blue-600 font-bold" : ""}`}
        ```

5.  **Visualización**:
    -   Modificamos el punto de entrada `main.jsx` para importar el componente de `act2/Welcome.jsx`, permitiendo ver esta versión específica en el navegador.

---
*Repositorio estructurado por Alberto.*
