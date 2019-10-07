# Api Test

Api Test de autenticación firebase y listado de quehaceres.

La Api fue testeada con angular 7 y node v8.

## Instalación

Ingresa al directorio raíz del proyecto y ejecuta `npm install` para instalar las dependencias requeridas.

Luego ejecuta `ng serve` para iniciar el servidor de desarrollo.
Navega a `http://localhost:4200/`.

### Login

![](/src/assets/imgs/login.PNG?raw=true)

Para ingresar, indique su correo y contraseña. En caso de aún no contar con una cuenta, presione la opción "Crear una cuenta"

### Registro de usuario

![](/src/assets/imgs/regist.PNG?raw=true)

Para registrarse, indique su email y contraseña para su cuenta. Se estará indicado un mensaje en caso de registrarse la cuenta exitosamente o en caso contrario el mensaje de error.


### Lista de quehaceres.

![](/src/assets/imgs/todo-list.PNG?raw=true)

Se muestra el listado de que haceres junto a los usuarios a los cuales corresponde cada tarea. En la parte inferior izquierda del listado, se cuenta con el paginador de tareas.

Para salir de su cuenta, presione la opción "Logout" ubicada en la parte superior derecha.