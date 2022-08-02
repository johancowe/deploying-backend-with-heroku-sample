const express = require('express'); // import express module (simplifies routing/requests, among other things)
const app = express(); // create an instance of the express module (app is the conventional variable name used)
const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

app.get('/', (req, res) => { // send a get request to root directory ('/' is this file (app.js))
  res.send('<h1>Welcome to project PANCAKE - from the COWE boyz !!</h1>');
})

app.listen(PORT, () => { // start server and listen on specified port
  console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
}) 