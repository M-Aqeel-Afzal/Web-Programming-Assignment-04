const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Vechile Schema 
let Create_Table = new Schema({
    vid: {
        type: Number
      },
    tmstmp: {
        type: Number
      },
    lat: {
        type: Number
      },
    lon: {
        type: Number
      },
    hdg: {
        type: Number
      },
    pid:{
        type: Number
      },
    rt: {
        type: Number
      },
    des: {
        type: String
      },
    pdist: {
        type: Number
      },
    dly: {
        type: String
      },
    tatripid: {
        type: Number
      },
    origtatripno: {
        type: Number
      },
    tablockid: {
        type: String
      },
    zone: {
        type: String
      }
  
}, 
{
    collection: 'Vechile'
})

// Exporting it to the ChicagoDatabase
module.exports = mongoose.model('Vechile', Create_Table)
