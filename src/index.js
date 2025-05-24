const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config');
const {sendBasicMail} = require('./services/email-service');

const setUpAndStartServer = ()=>{
  app.listen(PORT, ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    console.log("Server started on port: ", PORT);

    sendBasicMail(
      'support@admin.com',
      'mewadasmit72@gmail.com',
      'Testing reminder service',
      'Trying to send email through reminder service'
    )
  });
}

setUpAndStartServer();