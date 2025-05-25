const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config');
const {sendBasicMail} = require('./services/email-service');
const jobs = require('./utils/job');
const v1ApiRoutes = require('./routes/index');

const setUpAndStartServer = ()=>{
  app.listen(PORT, ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', v1ApiRoutes);
    console.log("Server started on port: ", PORT);
    jobs();

    // sendBasicMail(
    //   'support@admin.com',
    //   'mewadasmit72@gmail.com',
    //   'Testing reminder service',
    //   'Trying to send email through reminder service'
    // )
  });
}

setUpAndStartServer();