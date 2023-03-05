const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Stops Schema 
let Create_Table = new Schema({
    stpid: {
        type: Number
      },
    stpnm: {
    type: String
    },
    lat: {
        type: Number
      },
    lon: {
        type: Number
      }
  
}, 
{
    collection: 'Stops'
})

// Exporting it to the ChicagoDatabase
module.exports = mongoose.model('Stops', Create_Table)
