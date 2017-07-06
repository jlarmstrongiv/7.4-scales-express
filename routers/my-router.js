const express = require('express')
  , routerHelpers = require('./router-helpers')
  , myController = require('../controllers/my-controller');
// REF Projects 6-Gabber-Twitter

module.exports = function (app) {
  const myControllerRouter = express.Router();
  myControllerRouter.get('/create', myController.getCreate);

  myControllerRouter.get('/', myController.redirect);
  myControllerRouter.get('/list', myController.getList);
  myControllerRouter.get('/item', myController.getItem);
  myControllerRouter.post('/item', routerHelpers.debugMiddleware, myController.postItem);
  myControllerRouter.delete('/list', routerHelpers.debugMiddleware, myController.deleteItem);

  app.use('/', myControllerRouter);
  // app.use('/pages', myControllerRouter); // set url prefix
};

// myControllerRouter.get('/pageOne', myController.pageOne);
// myControllerRouter.get('/pageTwo', myController.pageTwo);
// myControllerRouter.get('/pageThree', myController.pageThree);

// myControllerRouter.get('/:page', routerHelpers.debugMiddleware, myController.detail);
