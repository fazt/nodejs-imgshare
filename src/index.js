const express = require('express');
const path = require('path');

const config = require('./server/config');
const app = config(express());

// database
require('./database');

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
