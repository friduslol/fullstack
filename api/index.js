const express = require('express');
const port = 3001;
const channelRoutes = require('./routes/channelRoutes.js');
const userRoutes = require('./routes/userRoutes');

//server setup
const app = express();

//parsing req.body for server
app.use(express.json())

//middleware for checking, get accsess to all routes
app.use("/api/v1/channels", channelRoutes);
app.use('/api/v1/users', userRoutes);

//starts the server
app.listen(port, (err) => {
    if (err) {
      console.error("The server could not be started...");
      console.log(err);
      return;
    }
    console.log(`Listening on port ${port}`);
  });

