// const mongoose = require('mongoose');
const Vinyl = require('../models/my-collection');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/mongoosevinyl');

const jsonfile = require('jsonfile')
  , dataFile = './data.json';

// REF Projects 6-Gabber-Twitter

// prepend path variable for view folder hierachy
// let staticPath = 'users/';
// let path = staticPath + 'pageOne';
// res.send(path);
module.exports = {
  redirect: (req, res) => {
    console.log('redirect');

    return res.redirect('list');
  },
  getList: (req, res) => {
    console.log('getList');

    return res.render('list', {});
  },
  getItem: (req, res) => {
    console.log('getItem');

    return res.render('item', {});
  },
  postItem: (req, res) => {
    console.log(postItem);
    
  },
  getCreate: (req, res) => {
    console.log('getCreate');

    Vinyl.remove({}, function (error) {
      console.log('dropping database');
    });

    let context = jsonfile.readFileSync(dataFile);
    let music = context.music;
    // console.log(context.music);
    for (var i = 0; i < music.length; i++) {
      // console.log(music[i].artist)
      const vinyl = new Vinyl ({
        // TODO Change to if attribute 'artist' exists
        artist: music[i].artist,
        album: music[i].album,
        songs: music[i].songs,
        size: music[i].size
      });
      vinyl.save({}, function (error) {
        console.log('saved vinyl'); // logging , music[i].album won't work
      });
    }
    return res.send('added database');
  },
  deleteItem: (req, res) => {

  }

};

// app.get('/', function (req, res) {
//   return;
// });

// REF https://expressjs.com/en/guide/routing.html
// /variable/:variableId // post or get URL
// console.log(req.params.variableId); // /variable/myVariable
// console.log(req.query.queryId); // /variable/myVariable?queryId=myQuery
// console.log(req.session.key); // cookie value
// return res.sendStatus(200);
// return res.render('index', context);
// return res.redirect('index');
