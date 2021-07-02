const express = require('express');
const path = require('path');
const mongodb = require('./database/mongodbultis');
const app = express();
const port = 3000;

const home = require('./routes/home.js');
const pets = require('./routes/pets.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

mongodb.connect((err) => {
  if (err) console.error(err);
});
app.get('/', (req, res)=> {
  res.sendFile(path.join(_dirname, + '/view/home.html'));
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/home', home);
app.use('/pets', pet);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});