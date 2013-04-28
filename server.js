var express = require('express'),
    monsters = require('./routes/monsters');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/monsters', monsters.findAll);
app.get('/monsters/:id', monsters.findById);
app.post('/monsters', monsters.addMonster);
app.put('/monsters/:id', monsters.updateMonster);
app.delete('/monsters/:id', monsters.deleteMonster);

app.listen(3000);
console.log('Listening on port 3000...');

