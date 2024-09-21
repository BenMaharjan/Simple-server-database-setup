How to create a simple server and a database and connect them

Setup NPM - run npm init -y
install express package to create server - npm install express
install pg for postgres client - npm install pg
install dotenv to load envvironment variables from .env - npm install dotenv --save
create a .env file
create a .gitignore file:
  - add 'node_module' to gitignore file
  - add env to gitignore file
create a simple express server - app.js
create a postgres database in render
get external database url from the render database and add this to the env file
can also add the port number to this file
create a db folder with a script folder inside it
in the db folder write an index.js file to create a new pool with a connection to the render database
in the script folder create a reset-database.js file to create database. 
  - Make sure you import the pool that you created in the index.js file - import { pool } from "../index.js";
run the index.js file to create your database
  - make sure to run with dotenv to load your environemtn variables
run the app.js to run your server. Shoul be able to see your database in postman 
 - make sure to run with dotenv to load your environemtn variables
you can write a script to run the reset-database file
  - "reset-database": "node -r dotenv/config db/scripts/reset-database.js"
you can write a script to run app.js to start server
  - "start": "node -r dotenv/config app.js"


