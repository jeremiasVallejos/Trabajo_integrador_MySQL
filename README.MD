# Segundo proyecto integrador Desarrollador BackEnd

 Este proyecto integrador esta basado en Node.js y Sequelize con MySQL.  La aplicación permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos relacional, utilizando el archivo trailerflix.json como referencia para diseñar el modelo de datos.

 ## Instalación

```shell
npm install
```
## Configuración
Crea un archivo **.env** en la raíz del proyecto y agrega las siguientes variables de entorno, en la raíz del proyecto también tenemos un ejemplo de **.env**

```shell
PORT= 300
DATABASE= trailerflix
DBUSER= example
PASSWORD= 123456
HOST= localhost
```

## Ejecución
```shell
npm run dev
```

## Uso

Se recomienda usar Postman para la ejecución de los distintos endpoints.

### Endpoints disponibles
* Crear un contenido:
    ```javascript
    POST /contenido
    ```
    Cuerpo de la solicitud:

    ```json
    {

    "titulo": "¿QUÉ PASÓ AYER?",
    "categoria": 1, 
    "resumen":"es una comedia sobre tres amigos que pierden al novio tras una descontrolada despedida de soltero en Las Vegas y deben encontrarlo antes de la boda.",
    "temporadas": "ninguna",
    "poster": "poster/2",
    }
    ```
    Respuesta de la exitosa de la solicitud:
     ```json
    {
        "message": "Se creao el contenido exitosamente"
    }
     ```

---

* Obtener todos los productos:

    ```javascript
    GET /contenido
    ```
    Respuesta de la exitosa de la solicitud:
    La respuesta de la solicitud es un array de objectos

---

* Obtener el producto por título:

    ```javascript
    GET /contenido/title/riverdale
    ```
    Respuesta de la exitosa de la solicitud:
     ```json
     {
    "id": 2,
    "titulo": "Riverdale",
    "categoria": 1,
    "resumen": "El paso a la edad adulta incluye sexo...",
    "temporadas": "5",
    "poster": "/posters/2.jpg"
     }
     ```

---

* Obtener el producto por id:

    ```javascript
    GET /contenido/2
    ```
    Respuesta de la exitosa de la solicitud:
     ```json
     {
    "id": 2,
    "titulo": "Riverdale",
    "categoria": 1,
    "resumen": "El paso a la edad adulta incluye sexo...",
    "temporadas": "5",
    "poster": "/posters/2.jpg",
    "actores": ["jeremias", "juan", "agustin"],
    "generos": ["terror","suspenso"]
    }
     ```

---

* Editar el precio de un producto por id:

    ```javascript
    PUT /contenido/2
    ```

     Cuerpo de la solicitud:

    ```json
      {
    "id": 2,
    "titulo": "Riverdale",
    "categoria": 1,
    "resumen": "El paso a la edad adulta incluye sexo...",
    "temporadas": "2",
    "poster": "/posters/2.jpg",
    "actores": ["jeremias", "juan", "agustin"],
    "generos": ["terror","suspenso"]
    }
    ```

    Respuesta de la exitosa de la solicitud:
     ```json
    {
        "message": "El contenido con id 2 ha sido actualizado exitosamente."
    }
     ```
     
---

* Eliminar un producto por código:

    ```javascript
    DELETE /contenido/2
    ```

    Respuesta de la exitosa de la solicitud:
     ```json
    {
        "message": "El contenido se elimino satisfactoriamente"
    }
     ```