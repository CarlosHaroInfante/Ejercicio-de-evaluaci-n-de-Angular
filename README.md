# Aplicación de Gestión de Actores

## Descripción

Esta aplicación permite gestionar una lista de actores/actrices, añadiendo información relevante sobre ellos, como su nombre real, personaje, películas en las que han actuado, edad, nacionalidad y fecha de nacimiento. Los actores se pueden agregar mediante un formulario y visualizar la lista de actores en la misma página.

La aplicación interactúa con un servidor de backend (simulado con un servidor JSON local) para almacenar los datos de los actores y los muestra de manera interactiva en la interfaz de usuario.

## Características

- **Añadir Actores**: A través de un formulario de entrada, puedes agregar nuevos actores con su nombre, películas, personaje, edad, nacionalidad y fecha de nacimiento.
- **Visualizar Lista de Actores**: Los actores añadidos se muestran en una lista con la información proporcionada.
- **Validación**: El formulario tiene validaciones básicas, como la obligatoriedad de campos como el nombre, edad y películas.

## Tecnologías Utilizadas

- **Frontend**:
  - **Angular**: Para el desarrollo de la interfaz de usuario y la gestión de estados.
  - **HTML/CSS**: Para la estructura y el diseño del formulario y la lista de actores.
  
- **Backend**:
  - **json-server**: Usado para simular un backend con una base de datos en formato JSON. Permite guardar y obtener datos de forma sencilla.

## Instalación

### Paso 1: Clonar el Repositorio

Primero, clona el repositorio de GitHub:

```bash
git clone https://github.com/tu_usuario/gestion-actores.git
cd gestion-actores