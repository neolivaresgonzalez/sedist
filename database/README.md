Para desplegar: 
aws cloudformation deploy --template-file DynamoDB_Table.template --stack-name dynamotest --parameters-override HashKeyElementName="id"

Para importar datos de wikipedia agregar tokens de acceso a import.py y correr con python (requiere boto "pip/pip3 install boto")

Fuentes:

-Script Python para importar basado en: https://riptutorial.com/es/amazon-dynamodb/example/21917/importe-un-archivo-csv-en-una-tabla-de-dynamodb-usando-boto--paquete-python-

-Template de cloudformation basado en ejemplos de DynamoDB de la documentación oficial de Amazon cloudformation.
