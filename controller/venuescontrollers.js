const connection = require('../config/database');
require('dotenv').config();

exports.createVenues = async (req, res) => {
    try {
      const { Name,Description,Capacity, Image,Address} = req.body;
      const query = `INSERT INTO Venues ( Name,Description,Capacity, Image,Address) VALUES ('${Name}','${Description}','${Capacity}','${Image}','${Address}')`;
      const [result] = await connection.promise().query(query);
      rest.status(200).json(result)
     
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // HON AAM BAAML GET 
exports.getAllVenue = async (req, res) => {
  try {
    const query = "SELECT * FROM Venue";
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getVenuebyID = async (req, res) => {
    try {
        const Id= req.params.Id;
      const query = `SELECT * FROM Venue WHERE Id= ${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };

  exports.deleteVenuebyId = async (req, res) => {
    const Id = req.params.Id;
    try {
      const query = `DELETE FROM Venue WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'errorrr' });
    }
  };
  exports.updateVenues = async (req, res) => {
    const Id = req.params.Id;
    const name = req.body.name;
    const Description = req.body.Description;
    const Capacity = req.body.Capacity;
    const Image = req.body.Image;
    const Address = req.body.Address;


    try {
      res.status(200).json(result);
      const query = `UPDATE users SET name = '${name}', Capacity = '${Capacity}', Image = '${Image}',Address = '${Address}',Description = '${Description}'WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  };
