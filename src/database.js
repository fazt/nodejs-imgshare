const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imgshare', {
  useNewUrlParser: true    
})
  .then(db => console.log('db is connected'))
  .catch(err => console.log(err));
