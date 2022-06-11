[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Connect With Me

## Description

An API for a social network web application created using Node, Express, Mongoose, and MongoDB. Users can share their thoughts, react to friends’ thoughts, and create a friend list.


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Walkthrough Video](#walkthrough-video)
4. [Build](#build)
5. [Websites](#websites)
6. [License](#license)

## Installation

You can run this application locally by:

1. Install the required packages using `npm install`
2. Make sure your MongoDB database server is running.
3. Start the application server by running `npm start`
4. By default, the server will be listening on port 3002.

## Usage

Once installation steps above have been completed, open an api testing application such as Postman or Insomnia.

### Creating data

- Post a user: `http://localhost:3002/api/users`
- Post new friend to user: `http://localhost:3002/api/users/{userId}/friends/{friendId}`
- Post a new thought: `http://localhost:3002/api/thoughts/`
- Post a new reaction: `http://localhost:3002/api/thoughts/{thoughtId}/reactions`

### Reading data

- Get all users: `http://localhost:3002/api/users`
- Get a single user: `http://localhost:3002/api/users/{userId}`
- Get all thoughts: `http://localhost:3002/api/thoughts`
- Get a single thought: `http://localhost:3002/api/thoughts/{thoughtId}`

### Updating data

- Update a single user: `http://localhost:3002/api/users/{userId}`
- Update a thought: `http://localhost:3002/api/thoughts/{thoughtId}`

### Deleting data

- Delete a user: `http://localhost:3002/api/users/{userId}`
- Delete a friend from a user: `http://localhost:3002/api/users/{userId}/friends/{friendId}`
- Delete a thought: `http://localhost:3002/api/thoughts/{thoughtId}`
- Delete a reaction: `http://localhost:3002/api/thoughts/{thoughId}/reactions/{reactionId}`

## Walkthrough Video

A video walkthrough of how to use this application is available here: [Video](https://drive.google.com/file/d/1VtPM2_HSAHIJ0wX9jmvbXok3KJJmwkkH/view?usp=sharing)


## Build

The following technology stack was used:

- Node.JS
- Express.JS
- Mongoose ODM
- MongoDB
- DayJS
- Validator

## Websites

https://drive.google.com/file/d/1VtPM2_HSAHIJ0wX9jmvbXok3KJJmwkkH/view?usp=sharing

https://github.com/gmadnani/connect-with-me

## License

This project is licensed under MIT.
