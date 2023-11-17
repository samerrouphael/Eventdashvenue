const connection = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUsers= async (req, res) => {
    try {
      const { role, full_name,  email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); 
      const query = `INSERT INTO users (role, full_name,  email, password) VALUES ('${role}','${full_name}','${email}','${hashedPassword}')`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result)
     
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // HON AAM BAAML GET 
exports.getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getUsersbyId = async (req, res) => {
    try {
        const Id= req.params.Id;
      const query = `SELECT * FROM users WHERE Id= ${Id}`;
      const [result] = await connection.promise().query(query);
      if ( result.length==0){ res.status(500).json({message : "ID not exist" });
 
}
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };

  exports.deleteUsersbyId = async (req, res) => {
    const Id = req.params.Id;
    try {
      const query = `DELETE FROM users WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'errorrr' });
    }
  };
  exports.updateUsers = async (req, res) => {
    const Id = req.params.Id;
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    try {
      const query = `UPDATE users SET full_name = '${full_name}', email = '${email}', password = '${password}' WHERE Id=${Id}`;
      const [result] = await connection.promise().query(query);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  };

  // Sign IN 
  exports.getOneUsersByEmailPassword = async (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    try {
      const query = `SELECT * FROM users WHERE email =?`;
      
      const [result] = await connection.promise().query(query,[email]);
  
      if (result.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const user = result[0];
      console.log(user);
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
     
      if (isPasswordValid) {
        const token = jwt.sign(user, process.env.SECRET_VALUE, { expiresIn: '1d' });
        res.status(201).json({user,token}); 
      } else {
        res.status(401).json({ error: 'failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
}
