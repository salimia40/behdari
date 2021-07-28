const {
  sequelize
  ,InventoryDrug, Drug
} = require("./db");

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const port = 8080

var start = async () => {
  await sequelize.sync();
  const app = express()
  app.use(cors({
    exposedHeaders: ["Content-Type","Content-Range" ]
  }))
  app.use(express.urlencoded())
  app.use(express.json())
  routes(app)
  app.use(express.static('./public'))

   app.listen(port)
   return app
};

module.exports = start;
