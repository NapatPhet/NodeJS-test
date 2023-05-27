const express = require('express');
const chalk = require('chalk')
const debug = require('debug')
const morgan = require('morgan')
const path = require('path')
const productRounter = express.Router();
const app = express();

// Middleware
app.use(express.static(path.join(__dirname,"/public/")));
app.use(morgan('combined'))

app.set("views","./src/views");
app.set("view engine", "ejs")
productRounter.route("/").get((res,req) =>  {
  res.setEncoding("Hello World this is product")
})
app.use("/product", productRounter)
// Route Handler
app.get('/', (req, res) => {
  res.render('index',{username: 'Natty'});
});

// Start the server
app.listen(4000, () => {
  debug('Listening on port 4000' + chalk.green(" : port"));
});
