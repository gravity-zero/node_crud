const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5008;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Toto fait du vélo");
});
// Require employee routes
const employeeRoutes = require('./src/routes/employee.route')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 