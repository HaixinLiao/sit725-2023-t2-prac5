let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./public/dbConnection');
let router = require('./public/routers/router');


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);


app.listen(port, ()=>{
    console.log('express server started');
});