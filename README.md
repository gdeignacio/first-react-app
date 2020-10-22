# ENTORNO DE DESARROLLO DOCKER PARA REACT

## Instrucciones 

Este repositorio despliega un entorno de desarrollo orientado a aplicaciones react.

El archivo docker-compose.yaml que se encuentra en deploy/develop guarda la definicion de los servicios react que se despliegan, pudiendo desplegarse multiples de ellos cada uno en un puerto diferente.

### Requisitos previos
Instala docker y docker-compose en tu entorno, aunque docker es multiplataforma los entornos linux son los menos problematicos, los apple tampoco suelen dar ningun problema sin embargo en los equipos con windows puedes encontrarte con algun inconveniente durante el proceso de instalación, o ejecucion de los scripts en power shell. Por lo que se recomienda virtualizar un sistema linux para desarrollar mas cómodamente.

### Pasos

> ./bin/build 

para construir o reconstruir las imagenes necesarias, esto solo es requerido la primera vez, aunque puedes usar este script para regenerar las imagenes cuando te interese.


> ./bin/start 

lanza todos los servicios definidos en el archivo docker-composer.yaml, dejando el entorno operativo para desarrollar sobre el codigo fuente y ver el resultado de cada cambio.

###  Otros Scripts útiles

> ./bin/cleanup

para limpiar el sistema de cualquier contenedor en ejecucion.

> ./bin/logs

para reconectar con la salida de logs, por que aunque tras el bin/start si cortamos la ejecucion el proceso continua en background y los servicios no se caen.

> ./bin/npm

entramos en un contenedor con el directorio source mapeado sobre el cual tenemos node, npm y create-react-app para poder desplegar nuevos proyectos o instalar librerias y dependencias en los proyectos.



### como crear una app nueva y desplegar el servicio en el entorno

```
./bin/npm

create-react-app <nombre-de-tu-app>

exit 
```
con esto accedemos al contenedor auxiliar para ejecutar comandos node, creamos el proyecto y salimos del contenedor, comprobaremos que en e directorio source se ha creado una carpeta < nombre-de-tu-app >, y ahora solo nos queda editar docker-compose.yaml
para añadir un nuevo servicio como los ejemplos "practica1" y "practica2" en este caso "nombre-de-tu-app" seleccionando un puerto que este disponible

ejecuta 
> ./bin/start

en localhost:< puerto > podras ver el servicio operativo.