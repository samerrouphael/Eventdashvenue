const connection = require('../config/database');
require('dotenv').config();

exports.createEvent = async (req, res) => {
    try {
      const {Title, date, TicketPrice, Description, Venue_ID } = req.body;
      const query = `INSERT INTO events (Title,date,TicketPrice,Description,Venue_ID) VALUES ('${Title}','${date}',${TicketPrice},'${Description}',${Venue_ID})`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result)
     
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // HON AAM BAAML GET 
exports.getAllEvent = async (req, res) => {
  try {
    const query = "SELECT * FROM events";
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getEventbyID = async (req, res) => {
    try {
        const Id= req.params.Id;
      const query = `SELECT * FROM events WHERE Id= ${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };

  exports.deleteEventbyId = async (req, res) => {
    const Id = req.params.Id;
    try {
      const query = `DELETE FROM events WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'errorrr' });
    }
  };
  exports.updateEvent = async (req, res) => {
    const Id = req.params.Id;
    const Ticket = req.body.Ticket;
    const Description = req.body.Description;
    const Venue_Id = req.body.Venue_Id;
    const date = req.body.date;
    try {
      const query = `UPDATE events SET Ticket = '${Ticket}', Description = '${Description}', Venue_Id = '${Venue_Id}', date = '${date}' WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  };
