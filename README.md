# Documentación de Prácticas: TaskHub (Laravel + React)

Este repositorio contiene el desarrollo progresivo de las actividades de clase para la creación de **TaskHub**.

![taskhub](assets/taskhub.gif)

## Índice de Ejercicios
1.  [Actividad 1: Introducción a JSX](#1-actividad-1-act1)
2.  [Actividad 2: Organización de Componentes](#2-actividad-2-act2)
3.  [Actividad 3: Estado y Eventos (Contador)](#3-actividad-3-estado-y-eventos)
4.  [Proyecto Final: TaskHub (Laravel)](#4-proyecto-final-taskhub-laravel)
5.  [Fase 5: Todo List Interactivo (CRUD)](#5-fase-5-todo-list-interactivo-crud)

## Estructura del Repositorio
El repositorio se divide en tres secciones claras:

1.  **Carpeta `act1/`**: Primera iteración (Código fuente).
2.  **Carpeta `act2/`**: Segunda iteración (Código fuente reorganizado).
3.  **Carpeta `act3/`**: Tercera iteración (Contador y Estados).
4.  **Carpeta `taskhub/`**: **PROYECTO FINAL** en Laravel Framework (Ejecutable).

---

## 1. Actividad 1 (`act1`)
*Objetivo: Introducción a la sintaxis JSX y dinamismo básico.*

En esta carpeta se encuentra el archivo `Welcome.jsx` original modificado.
-   **Cambios realizados**:
    -   Sustitución de HTML estático por variables `{nombreUsuario}`.
    -   Uso de `.map()` para listar tareas.
    -   Estilos condicionales (Azul si incluye "Laravel").

## 2. Actividad 2 (`act2`)
*Objetivo: Consolidación y Organización.*

Repliqué la lógica de la Actividad 1 en una estructura de carpetas independiente.
-   **Estado final**: El código es funcionalmente idéntico a la Actividad 1, pero organizado en su propio directorio para entrega separada.

---

## 3. Actividad 3 (Estado y Eventos)
*Objetivo: Profundizar en `useState` y Lógica Condicional.*

Evolucioné el componente `Welcome.jsx` introduciendo interactividad real:
-   **Nuevo Estado `contador`**: Variable numérica inicializada en 0 para controlar el límite de tareas.
-   **Lógica de Incremento**: Al añadir una tarea, el contador aumenta (`setContador(contador + 1)`).
-   **Lógica de Bloqueo**: Si el contador llega a 10, **se impide añadir más tareas**.
-   **Renderizado Condicional (Botón)**:
    -   Cuando el contador llega a 10, el botón cambia visualmente:
        -   **Color**: Pasa de índigo a rojo (`bg-red-500`).
        -   **Texto**: Cambia de "Añadir Tarea..." a "¡Lista Llena!".
-   **Carpeta**: El código fuente de esta actividad se ha guardado en `act3/` para referencia.

---

## 4. Proyecto Final: TaskHub (Laravel)
*Carpeta: `taskhub/`*

Esta es la implementación **real y completa** utilizando el Framework Laravel, siguiendo todos los pasos oficiales del enunciado.

### Pasos de Instalación Realizados:

#### A. Preparación (Caja de Herramientas)
1.  **Base de Datos**: Se creó la base de datos `taskhub` en MySQL (XAMPP).
2.  **Composer**: Se verificó la instalación correcta de Composer.

#### B. Instalación (Frameworks)
Se ejecutaron los comandos profesionales para crear el proyecto e integrar React:
```bash
# 1. Crear proyecto Laravel
composer create-project laravel/laravel taskhub

# 2. Instalar la "brisa" (Breeze) para React
cd taskhub
composer require laravel/breeze --dev
php artisan breeze:install react
```

#### C. Configuración (Conexión de Cables)
Se editó el archivo `.env` dentro de `taskhub/` para conectar con la base de datos creada:
```env
DB_CONNECTION=mysql
DB_DATABASE=taskhub
DB_USERNAME=root
DB_PASSWORD=
```
Y se ejecutaron las migraciones: `php artisan migrate`.

#### D. Implementación del Código
Finalmente, se trasladó la lógica de la **Actividad 2** al corazón de Laravel:
-   **Archivo modificado**: `taskhub/resources/js/Pages/Welcome.jsx`.
-   Ahora, al ejecutar el proyecto Laravel, se visualiza nuestra interfaz personalizada de "Alberto" con las tareas dinámicas.

### Cómo ejecutar el Proyecto Laravel
Para ver la versión final, necesitas dos terminales dentro de la carpeta `taskhub`:

1.  **Backend**: `php artisan serve`
2.  **Frontend**: `npm run dev`

---
*Práctica realizada por Alberto Estepa Gómez.*

---

## 5. Fase 5: Todo List Interactivo (CRUD)
*Objetivo: Implementación de un sistema CRUD completo en el frontend con React y Tailwind.*

En esta fase, se ha refactorizado completamente `Welcome.jsx` para crear una aplicación de gestión de tareas funcional y estética.

### Características Implementadas:
1.  **Gestión de Tareas (CRUD)**:
    -   **Crear**: Input con validación para añadir nuevas tareas.
    -   **Leer**: Listado dinámico de tareas pendientes y completadas.
    -   **Actualizar**: Edición 'inline' del título de la tarea al hacer click, y checkbox para marcar como completada.
    -   **Eliminar**: Botón para limpiar todas las tareas completadas de una vez.
2.  **Componentización**:
    -   `TaskStats`: Muestra contadores (Total, Completadas) y una barra de progreso.
    -   `TaskItem`: Componente individual que maneja su propio estado de edición.
3.  **Experiencia de Usuario (UX)**:
    -   **Diseño**: Interfaz limpia y profesional usando Tailwind CSS.
    -   **No-Select**: Se ha deshabilitado la selección de texto en la interfaz general para dar sensación de "aplicación nativa", permitiéndola solo en los campos de escritura.

