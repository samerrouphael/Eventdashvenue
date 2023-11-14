const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
});

const createUsersQuery = `CREATE TABLE IF NOT EXISTS users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(10),
    full_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
    
  )`;

  connection.promise().query(createUsersQuery)
  .then(() => {
    console.log(`users has been created `);
  })
  .catch((error) => {
    console.error(`Error creating table "users":`, error);
  });

  const createEventQuery = `
  CREATE TABLE IF NOT EXISTS Event (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255),
    date DATE,
    Ticket price INT,
    Description VARCHAR(255),
    Venue_ID INT,
    FOREIGN KEY (Venue_ID) REFERENCES Venues(Id) ON DELETE CASCADE ON UPDATE CASCADE
  )
`;
connection.promise().query(createEventQuery)
  .then(() => {
    console.log(`Event has been created`);
  })
  .catch((error) => {
    console.error(`Error creating table Event:`, error);
  });


  const createVenueQuery = `
  CREATE TABLE IF NOT EXISTS Venue (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Description VARCHAR(255),
    Capacity INT,
    Image VARCHAR(255),
    Address VARCHAR(255)
    
    
   
  )
`;
connection.promise().query(createVenueQuery)
  .then(() => {
    console.log(`Venue has been created`);
  })
  .catch((error) => {
    console.error(`Error creating table Venue:`, error);
  });

  const createRerservationQuery = `
  CREATE TABLE IF NOT EXISTS Reservation (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    EventID INT,
    UserID INT

        FOREIGN KEY (EventID) REFERENCES Users(Id) ON DELETE CASCADE ON UPDATE CASCADE
    FOREIGN KEY (UserID) REFERENCES Venues(Id) ON DELETE CASCADE ON UPDATE CASCADE
  )
`;
connection.promise().query(createReservationQuery)
  .then(() => {
    console.log(`reservation has been created`);
  })
  .catch((error) => {
    console.error(`Error creating table Reservation:`, error);
  });

  module.exports = connection;