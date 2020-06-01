const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require('./src/routes/index');

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// set port, listen for requests
app.use('/api',routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
