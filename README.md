# My Hacker News

This is a simple application that gets news from the Hacker News API at https://hn.algolia.com/api, offers the ability to search for articles, and the ability to save them to a database. It was created for a two day solo project at Hack Reactor. It does not currently have authentication, so it does not have much practical use at the moment, but authentication will be added in the future.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node, npm, and mongodb are required to use this application.

To install node/npm with homebrew on Mac OS X:

```
$ brew update && brew install node
```

To install node/npm with Ubuntu/Debian:

```
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

For Windows get the Windows installer for node/npm:
[Here](https://nodejs.org/en/download/)

For mongo, follow the instructions specific to your OS:
[Here](https://docs.mongodb.com/manual/administration/install-community/)

### Installing

Once you have node and npm, install application dependencies.
Make sure you are in the application directory and run:

```
$ npm install -g nodemon
$ npm install
```

### Run It

Run these each time you want to start the server:

```
$ mongod --fork --logpath /var/log/mongodb.log
$ npm run build
$ nodemon server
```

## Built With

* [React](https://facebook.github.io/react/) - Front end UI Framework
* [Express](http://expressjs.com/) - NodeJS Web Framework
* [MongoDB](https://www.mongodb.com/) - Document Database
* [Mongoose](http://mongoosejs.com/) - MongoDB ODM
* [Material-UI](http://www.material-ui.com/) - React components for Google's Material UI
* [Twitter Bootstrap](https://getbootstrap.com/) - UI Framework for Creating Responsive Web Apps
* [Axios](https://github.com/mzabriskie/axios) - Promise based http client

## Authors

* **Daniel Olita** [@danielwolita](https://twitter.com/danielwolita)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
