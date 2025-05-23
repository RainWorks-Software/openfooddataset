# Mirroring OFD
If you are dissatisfied with the current public instance of OFD, you are free to mirror the exact same service. There are two routes that you can choose:
- Hosting an exact replica of the OFD service using the Docker image
- Hosting a modified version of the OFD service using the source code

Some important environment variables to know are (can be found in [.env](../.env)):
- ``PRODUCTS_DIR`` - This is the directory that contains all the .json UPC product information. This is a **required** variable, else OFD will quit.
- ``LOG_SQLITE`` - This is the absolute path to the telemetry sqlite file. This is an *optional* variable. If it is undefined, the telemetry SQLITE file will be memory stored. 
- ``PRODUCTS_DATE`` - This is a date in the format of DD/MM/YY. This is an *optional* variable. It is only used for metadata.

Please find the specific section based on your needs for the full guide.

### Hosting using the Docker Image
This guide will assume that you are:
- familiar with Docker and its commands, terminology, etc.
- familiar with Linux


### Hosing using the source code
This guide will assume that you are:
- familiar with Linux
- familiar with programming in TypeScript and are able to modify and build the project successfully