var express = require('express'),
    monsters = require('./routes/monsters');

var app = express();
 
app.get('/monsters', monsters.findAll);
app.get('/monsters/:id', monsters.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');