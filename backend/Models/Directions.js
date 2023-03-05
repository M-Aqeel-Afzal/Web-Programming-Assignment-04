const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Directions Schema 
let Create_Table = new Schema({
    dir: {
        type: String
      }
}, 
{
    collection: 'Directions'
})

// Exporting it to the ChicagoDatabase
module.exports = mongoose.model('Directions', Create_Table)
