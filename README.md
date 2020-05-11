### WellnecityAppWebApi

A REST API built with Node.js & Express.js

### Global Dependencies | System Requisites

`
Following are the system requisites:

1. NodeJs & NPM : go to https://nodejs.org/en/ and download the latest stable version, this will install Node and NPM on the system.

This application was built with Node Version- v8.11.4 and Npm version- 5.6.0

2. Nodemon: Use command `sudo npm install -g nodemon`
   `

### Project Setup and Execution

1. Install project Dependencies executing `npm install` inside the project directory.
2. Execute `npm start` to start the API server. You can prefix it `APPLICATION_ENV= ${env_name}` to start the server in any particular Environment e.g `APPLICATION_ENV=prod npm start` to start the API server in prod environment. You can find the available environments inside `./environments` directory in the root project directory. By default, the environment is `Development`.

### Accessing the API

The API runs on port `1337` in development & `1338` in production by default (can be changed in future), and the base url can be accessed by navigating to `http://localhost:${port_number}/` in your browser/ Rest Client.

### Accessing the API Documentation (Swagger)

Please follow this URL for API docuemntation, schema and running APIs for demo purpose during development.

http://<HOST>:<PORT>/D0cSEncRYp3t3d

In our case: http://localhost:1337/D0cSEncRYp3t3d