const connection = require('../config/database');
require('dotenv').config();

exports.createReservation = async (req, res) => {
    try {
      const {EventID,UserID } = req.body;
      const query = `INSERT INTO reservation (EventID,UserID) VALUES (${EventID},${UserID})`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result)
     
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // HON AAM BAAML GET 
exports.getAllReservation = async (req, res) => {
  try {
    const query = "SELECT * FROM Reservation";
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getReservationbyID = async (req, res) => {
    try {
        const Id= req.params.Id;
      const query = `SELECT * FROM Reservation WHERE Id= ${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };
  exports.getReservationbyEventID = async (req, res) => {
    try {
        const Id= req.params.Id;
      const query = `SELECT * FROM Reservation WHERE EventID= ${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };
  exports.getReservationbyUserID = async (req, res) => {
    try {
        const Id= req.params.Id;
      const query = `SELECT * FROM Reservation WHERE UserID= ${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };


  exports.deleteReservationbyId = async (req, res) => {
    const Id = req.params.Id;
    try {
      const query = `DELETE FROM Reservation WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'errorrr' });
    }
  };
  exports.updateReservation= async (req, res) => {
    const Id = req.params.Id;
    const EventID = req.body.EventID;
    const UserID = req.body.UserID;
    
    try {
      const query = `UPDATE users SET EventID = '${EventID}', UsereID = '${UserID}' WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  };
