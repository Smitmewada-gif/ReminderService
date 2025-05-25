const sender = require('../config/email-config');
const TicketRepository = require('../repository/ticket-repository')
const ticketRepository = new TicketRepository();


const sendBasicMail =  async (mailFrom, mailTo, mailSubject, mailBody) =>{
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody
    });
    console.log(response);
  } catch (error) {
      console.log(error);
      throw error;
  }
}

const fetchPendingEmails = async ()=>{
  try {
    const response = await ticketRepository.get({status: "PENDING"});
    return response;
  } catch (error) {
      console.log(error);
      throw error;
  }
}

const createNotification = async (data)=>{
  try {
    const ticket = await ticketRepository.create(data);
    return ticket;
  } catch (error) {
      console.log(error);
      throw error;
  }
}

const updateTicket = async (ticketId, data)=>{
  try {
    const response = await ticketRepository.updateTicket(ticketId, data);
    return response;
  } catch (error) {
      console.log(error);
      throw error;
  }
}

module.exports = {
  sendBasicMail,
  fetchPendingEmails,
  createNotification,
  updateTicket
}