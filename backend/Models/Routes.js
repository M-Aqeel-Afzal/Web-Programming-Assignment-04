const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Defining the Routes Schema 
let Create_Table = new Schema({
  rt:{
    type: String
  },
	rtnm:{
    type: String
  },
	rtclr:{
    type: String
  },
	rtdd:{
    type: String
  }
  
}, 
{
    collection: 'Routes'
})


// Exporting it to the ChicagoDatabase
module.exports = mongoose.model('Routes', Create_Table)