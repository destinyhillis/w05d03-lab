<<<<<<< HEAD
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const port = 3000;
app.listen(port, () => {
    console.log(`app listening on ${port}`)
})
=======
// here's some stuff
>>>>>>> 06cfd855323f9f5c60a7568bba9dd079d07dbc77
