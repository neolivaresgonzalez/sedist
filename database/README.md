Para desplegar: 
aws cloudformation deploy --template-file DynamoDB_Table.template --stack-name dynamotest --parameters-override HashKeyElementName="id"

Para importar datos de wikipedia agregar tokens de acceso a import.py y correr con python (requiere boto "pip/pip3 install boto")
