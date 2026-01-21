# Documentación de la Práctica: TaskHub

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

## 6. Actividad 2
Se creó una estructura separada para la segunda iteración:
-   Carpeta `act2` creada.
-   Componente `Welcome.jsx` replicado y adaptado.

---
*Repositorio estructurado por Alberto.*
