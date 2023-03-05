const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Patterns Schema 
let NestedPattern = new Schema({
    seq: {
        type: Number
      },
    lat: {
    type: Number
    },
    lon: {
    type: Number
    },
    typ: {
        type: String
    },
    stpid: {
        type: String
    },
    stpnm: {
        type: String
    },
    pdist: {
        type: Number
    }
})


let Create_Table = new Schema({
    pid: {
        type: String
      },
    ln: {
    type: String
    },
    rtdir: {
    type: String
    },
    pt: {
        type:NestedPattern
    }},
    {
    collection: 'Patterns' 
})

// Exporting it to the ChicagoDatabase
module.exports = mongoose.model('Patterns', Create_Table)
