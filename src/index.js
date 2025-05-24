const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config');

const setUpAndStartServer = ()=>{
  app.listen(PORT, ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    console.log("Server started on port: ", PORT);
  });
}

setUpAndStartServer();