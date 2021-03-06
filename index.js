const express = require('express');
const morgan = require('morgan');

const app = express();
const eventsRouter = require('./src/routes/eventsRouter');

const port = process.env.PORT || 8080;

//Middleware
// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

//database
const db = require('./src/database.js');
db;

//Event Routes
app.use('./events', eventsRouter);

//Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});