Este frontend fue implementado basado en este tutorial: https://medium.com/@hzburki.hzb/automate-static-site-deployment-on-s3-with-aws-codebuild-8b2546a360df

Corresponde a un sitio estático levantado en un bucket de AWS S3 mediante un pipeline

## AWS CodePipeline aplicado

1. Commit: los commits nuevos en la rama origin/master son capturados por AWS CodePipeline mediante webhooks

2. Build: Mediante un archivo de especificación de configuración (configuration/buildspec.yml) se construye la aplicación y se sincroniza el resultado en un bubket de S3 desde donde se puede acceder a la página estática pública, en este link:

http://sedistbucket.s3-website.us-east-2.amazonaws.com/

La aplicación web construida fue implementada usando el framework ReactJS. Basado en la documentación de Facebook
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

