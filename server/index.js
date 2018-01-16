const express = require('express');
const { json }  = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();
const port = 3001; 


const {herokuDb} = require('./config.js');


app.use(cors());
app.use(json());

massive(herokuDb).then((db) => {
    app.set('db', db);
});


const mainCtrl = require('./controllers/mainCtrl');


app.post('/api/test', mainCtrl.testSave);

app.listen(port, ( () => {
    console.log(`Listening on port ${port}.`);
}))
