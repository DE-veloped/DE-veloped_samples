//mongoose importieren
const mongoose = require('mongoose');

//Schema definieren
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  kunde: String,
  auftragswert: Number,
  waehrung: String,
  status: String,
  lieferdatum: Date,
});

//Model bereitstellen und mit DB-Collection verknüpfen
module.exports = mongoose.model('auftraege', orderSchema, 'auftraege');