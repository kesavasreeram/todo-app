# Zero to Production Node.js Application

Todo-App is a sample application to help understand how to create an application using Node.js, Express.js and having a PostgreSQL database connectivity. Follow

    https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

for step by step guide on how to create the application from scratch. There are few modifications from the documentation in the link.

### Getting Started

Install all of the required dependecies using:

    npm install

For development you'll probably want to install sequelize module globally:

    npm install -g sequelize-cli

Create config.json in `db/config` directory with the configuration of your database. The configuration should looks like this:

    {
      "development": {
        "username": "root",
        "password": null,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }

## Generating Models and persisting them in database

We are going to create two models: Todo and TodoItem. There will be a one to many relationship between Todo and TodoItem i.e Todo can have any number of TodoItems but TodoItem can only belonh to one Todo. Lets use sequelize-cli to generate a model for Todo and create a migration script as well. Executing the following command in terminal will generate a todo.js contain the model information within models directory and a migration script `<timestamp>-create-todo.js` to update the database within migrations directory.

    sequelize model:generate --name Todo --attributes title:string

You can provide as many comma separated attributes as you can within the above command.

We need to further modify these model and migration scripts to accomodate constraints for columns into the database tables. We may need some relations to be defined within different tables and such. These changes need to made in both model and migration scripts as well for consistency.

To persist these changes in models to the database we need to run the following command.

    sequelize db:migrate

### Running the application

To run the application in development mode:

    gulp

## License

MIT
