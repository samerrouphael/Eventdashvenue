const express = require('express');
const app = express();
const cors = require('cors');


const userroutes = require('./routes/userroutes');
const reservation = require('./routes/reservation');
const event = require('./routes/event');
const venuesroutes = require('./routes/venuesroutes');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/users', userroutes);
app.use('/event', event);
app.use('/venues', venuesroutes);
app.use('/reservation', reservation);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});