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

