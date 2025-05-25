const TicketService = require('../services/email-service');

const create = async (req, res) =>{
  try {
    const response = await TicketService.createNotification(req. body);
    return res.status(201).json({
      data: response,
      success: true,
      message: 'Successfully registered an email reminder',
      error: {}
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: 'Unable to register an email reminder',
      error: error
    })
  }
}

module.exports = {create}