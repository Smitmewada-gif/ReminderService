const cron = require('node-cron');
const emailSerive = require('../services/email-service');
const sender = require('../config/email-config');

const setUpJobs = ()=>{
  cron.schedule('*/1 * * * *', async () =>{
    const response = await emailSerive.fetchPendingEmails();
    response.forEach(email => {
      sender.sendMail({
        to: email.recepientEmail,
        subject: email.subject,
        text: email.content
    }, async (err, data) =>{
      if(err){
        console.log(err);
        await emailSerive.updateTicket(email.id, {status: "FAILED"})
      } else{
        console.log(data);
        await emailSerive.updateTicket(email.id, {status: "SUCCESS"})
      }

    })
    });
    console.log("cron response", response);
  })
}

module.exports = setUpJobs;