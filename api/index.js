const express = require('express');
const session = require("express-session");
const port = 3001;
const channelRoutes = require('./routes/channelRoutes.js');
const userRoutes = require('./routes/userRoutes');
const favRoutes = require("./routes/favRoutes");

//server setup
const app = express();

//parsing req.body for server
app.use(express.json())

app.use(
  session({

  name: "Ballerina",

  secret: "The Phantom Menace",

  resave: false,

  //will only create cookie on use
  saveUninitialized: false,
                          //will expire after one week
  cookie: { secure: false, maxAge: 7*24*60*60*1000},
  }),
);

//middleware for checking, get accsess to all routes
app.use("/api/v1/channels", channelRoutes);
app.use('/api/v1/users', userRoutes);
app.use("/api/v1/favourites", favRoutes);


//starts the server
app.listen(port, (err) => {
    if (err) {
      console.error("The server could not be started...");
      console.log(err);
      return;
    }
    console.log(`Listening on port ${port}`);
  });

