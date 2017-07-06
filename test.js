console.log('Create Dummy Database Data');
const vinylOne = new Vinyl({
  artist: 'Saint Motel',
  album: 'My Type EP, Limited Edition',
  songs: {
    aSide: [
      'My Type',
      'Ace in the Hole'
    ],
    bSide: ['Cold Cold Man', 'Midnight Movies']
  },
  size: 10
});
vinylOne.save();
// console.log(vinylOne.toObject());

const vinylTwo = new Vinyl({
  artist: 'Saint Motel',
  album: 'Saintmotelevision LP, Multi-color Splatter ',
  songs: {
    aSide: [
      'Move',
      'Get Away',
      'Destroyer',
      'Born Again',
      'Sweet Talk'
    ],
    bSide: [
      'You Can Be You',
      'For Elise',
      'Local Long Distance Relationship (LA2NY)',
      'Slow Motion',
      'Happy Accidents'
    ]
  }
});
vinylTwo.save();


Vinyl.find({}).then(results => {
  console.log(results);
  // res.render
});

Vinyl.findOne({}).then(result => {
  console.log(result);
});

Recipe.findOne({name: "Joel Salad"}).then(result => {
  const ingredient = {name: 'cheese', amount: 4};
  result.ingredients.push(ingredient);
  result.save();
    console.log(result);
});

Recipe.findOne({name: "Joel Salad"}).then(result => {
  if (result) { //truthy check
    const ingredient = {name: 'cheese', amount: 4};
    result.ingredients.push(ingredient);
    result.save();
      console.log(result);
  }
});
