//import express & mongoose module
var express = require("express");
var mongoose = require("mongoose");

// express initialisieren
var app = express();

//mongoose mit der Datenbank verbinden
mongoose.connect("mongodb://localhost:27017/UI5-Node-Express-Mongo-Datenbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.once("open", () => {
  console.log("Datenbankverbindung hergestellt");
});

//Funktion zum Lesen der Aufträge 
const getAllOrders = function (req, res) {
  //Import Auftragsmodel
  const orderModel = require("./auftraege_model");

  //Datenbankzugriff
  orderModel.find({}, (err, docs) => {
    if (!err) {
      return res.status(200).json(docs);
    } else {
      throw err;
    }
  });
};

//Route zu Aufträgen definieren
app.get("/auftraege", getAllOrders);

//Server starten
app.listen(3000, function () {
  console.log("Server gestartet auf Port 3000");
});
