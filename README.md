# Zero to Production Node.js Application

Todo-App is a sample application to help understand how to create an application using Node.js, Express.js and having a PostgreSQL database connectivity.

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

### Running the application

To run the application in development mode:

    gulp

## License

MIT
