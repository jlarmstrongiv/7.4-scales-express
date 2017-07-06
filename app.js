// Packages
const express = require('express')
  , path = require('path')
  , mustacheExpress = require('mustache-express')
  // , morgan = require('morgan')
  , bodyParser = require('body-parser')
  // , session = require('express-session')
  , expressValidator = require('express-validator')
  // REF 5.3-express-forms
  , parseurl = require('parseurl')
  , mongoose = require('mongoose');
  // mongoose@4.10.8
  // add jshint config to package.json

// REF https://github.com/tiy-greenville-summer-2017/7.2.1-Mongoose/blob/master/app.js
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/scalevinyl');

// My Files
const myRouter = require('./routers/my-router')
  , Vinyl = require('./models/my-collection');

// , jsonfile = require('jsonfile')
// , usersFile = './users.json';

// let context = jsonfile.readFileSync(usersFile);

// jsonfile.writeFileSync(usersFile, context, {spaces: 2});
// res.sendStatus(200);

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator({
  additionalValidators: 'equals'
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('layout', 'layout');
// Layout REF https://stackoverflow.com/questions/8790891/layouts-in-expressjs

// app.use(session({
//   secret: 'oP7C1kCe/kEy/Z24NtiJBRTuW57Ivz8+p8MJzDIynHs=',
//   resave: false,
//   saveUninitialized: false // changed from true https://stackoverflow.com/questions/40381401/when-use-saveuninitialized-and-resave-in-express-session
// }));

// REF Codes 7.3-mongo-robots
// Obsolete if using Mongoose
// // Mongo Middleware
// app.use(function(req, res, next) {
//   MongoClient.connect('mongodb://localhost:27017/jlaiv-newdb', (error, db) => {
//     console.log(error);
//     req.db = db;
//     next();
//   });
// });

app.use(function(req, res, next){
  next();
});

myRouter(app);

app.listen(3000, function () {
  console.log('Express is listening for connections');
});
