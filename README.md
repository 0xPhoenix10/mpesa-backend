```This service is used to analyse mpesa statements

It's doing the following
- uploaded Mpesa statement
- creates json data from the uploaded PDFs
- used transactions descriptions to get labels
- saves all data in elasticsearch
- return elasticsearch analytics


```Example
An example mpesa statement file is located in example folder
upload this file to localhost:8001/file/uploadMultiFiles

The process the docs with url > replace the filename with the name from the above url

localhost:8001/file/processDoc/38f0e85eb9bd04b641b6d9ecb9aa2bba?password=35388008




```Queue system for processing one doc at the time, and await for processing it

http://localhost:8001/admin/queues
