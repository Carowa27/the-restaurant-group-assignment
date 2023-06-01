# The Restaurant Group Assignment

## Groupmembers

- [Carolina](https://github.com/Carowa27)
- [Julia](https://github.com/juliacarlberg)
- [Maisah](https://github.com/maisahjuevesano)

## Assignment

Table reservation service for a restaurant.
Assume that the restaurant has 15 tables for six people at each table. The restaurant has two sittings every evening, one at 18:00 and one at 21:00. This means that all tables should be bookable twice per evening.

Based on this, create an application where it is possible to search for information for a given date or week. The user must be able to choose a time for the selected day. Collect personal data, inform about gdpr and ensure that the booking is carried out.

In an admin mode, reservations should be able to be administered (modified, removed, added) for the staff of the restaurant.

### Technical description

As a frontend, you must create a react project with the help of create-react-app and the typescript template.

As a backend, you need to create your own database and an api, in the same way as you have previously done with the help of node.js, express and mongo.

Searching for a table should be done via a form where the user can enter the number of people (1-6) and the desired date. A search is made via an API call and a result is presented to the user. If there were tables left, the time(s) available will be shown. If there are no tables left, a warning text appears and the user must search again.

When the user has selected a time, another form appears where the user can enter name, e-mail and phone number. Save or Cancel where Save writes the booking into the db via an API call.

For the admin mode, a simpler CRUD against the database and a simpler interface is necessary.

## Commit message convention

(type): message

_examples_

(docs): add readme (refactor): update all js to ts

### Types

| Type          | Short    | Description                                              |
| ------------- | -------- | -------------------------------------------------------- |
| feature       | feat     | new feature                                              |
| bug fix       | bug      | bug fix                                                  |
| documentation | docs     | changes or adds to documentation                         |
| refactor      | refactor | code changes that neither fix a bug nor adds a feature   |
| build         | build    | changes that affect the build or dependencies            |
| reverts       | revert   | revert to previos commit                                 |
| clean         | clean    | clean code of, for example, comments or unnecessary code |

### Badges

#### Frontend

![Lang TS](https://img.shields.io/badge/lang-TS-007acc) ![Lib React](https://img.shields.io/badge/lib-React-61DBFB)

![npm axios](https://img.shields.io/badge/npm-axios-9846A9)

#### Backend

![Lang TS](https://img.shields.io/badge/lang-TS-007acc)

![env node](https://img.shields.io/badge/env-node-68A063) ![app express](https://img.shields.io/badge/app-express-F0DB4F)

### Demo

To get it up and running follow these steps:

1. install all dependencies by writing "npm i" in the terminal
2. to compile ts to js write "npm run build" and get a dist file
3. to get the site up at localhost to see it write "npm run dev". If you want to start the js file write "npm start"

### Screenshots

### Accessibility screenshots
