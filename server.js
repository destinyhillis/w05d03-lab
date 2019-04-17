const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const studentController = require('./controllers/students')

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/students', studentController);


const port = 3000;
app.listen(port, () => {
    console.log(`app listening on ${port}`)
})