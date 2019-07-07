# Search Engine para Sistemas Distribuidos

## Integrantes

* Cristobla Becerra
* Leiser Mahu
* Nicolás Olivares

La descripción de cada sistema desplegable se encuentra en el README.md de cada carpeta correspondiente.

En líneas generales, este repositorio contiene la arquitectiura presentada en la figura:

![Alt text](distributedQuery.png)

La explicacion de cada uno de los componentes de este sistema estaran descritos a continuacion:

## AWS CodePipeline aplicado
```
1. Commit: los commits nuevos en la rama origin/master 
son capturados por AWS CodePipeline mediante webhooks
```
```
2. Build: Mediante un archivo de especificación de configuración (configuration/buildspec.yml) 
se construye la aplicación y se sincroniza el resultado en un bubket de S3 
desde donde se puede acceder a la página estática pública
```
La pagina esta desplegada en: http://sedistbucket.s3-website.us-east-2.amazonaws.com/

La aplicación web construida fue implementada usando el framework ReactJS. 
Basado en la documentación de Facebook de: This project was bootstrapped with [Create React App] en (https://github.com/facebook/create-react-app).

## Conexion API Gateway, AWS Lambda y DynamoDB

Para este sistema distribuido se uso Amazon Web Services, en concrreto estos 3 componentes que tienen las siguientes funcionalidades:

* 1. API Gateway: Este servicio provee una API REST para acceder a los datos.
En este caso tiene un endpoint con un GET para obtener la busqueda que realiza el usuario

* 2. AWS Lambda: Servicio que hace correr el codigo para manegar servidores la cual se encarga de escalarlo 
con gran disponibilidad. 
En este caso recibe el request del componente API Gateway y se comunica con la base de datos de DynamoDB
para sacar todos los terminos que concuerden con la busqueda.

* 3. DynamoDB: Servicio de una base de datos noSQL de llave-valor en donde esta alojado los titulos 
de una base de datos Wikipedia

