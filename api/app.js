const express = require('express');
const port = 3001;
const route = 'api/v1';
const radioRoutes = require('./routes/channelRoutes');

//server setup
const app = express();

//parsing req.body for server
app.use(express.json)

//starts the server
app.listen(port, (err) => {
    if (err) {
      console.error("The server could not be started...");
      console.log(err);
      return;
    }
    console.log(`Listening on port ${port}`);
  });


//middleware for checking, get accsess to all routes
app.use(route + '/channel', channelRoutes);