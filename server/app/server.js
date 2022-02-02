const express = require('express');
const app = express();
const { sequelize } = require('../app/database/models');

// Settings
const PORT = process.env.PORT || 3001;
//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./routes'));

app.listen(PORT, function () {
  console.log(`servidor on http://localhost:${PORT}!`);

  sequelize.authenticate().then(() => {
      console.log('db conectada');
  })
});