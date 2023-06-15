
const express = require('express');


//create a express server object
const app = express();

const port = 4000;

//if we have got (get) request then it is going to happen
app.get('/home', (request, response) => {
  console.log("request received");
  response.send('welcome to home');
});

//start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//in order to check what is happening in this server just go to command promt and type (node http_server_using_Express.js) 