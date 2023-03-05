let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const recordRoutes = express.Router();
let { MongoClient } = require("mongodb");

// Calling Route
function Call_Route(data) {
  const uri = "mongodb://127.0.0.1:27017/ChicagoDatabase";
  const client = new MongoClient(uri);
  const database = client.db("ChicagoDatabase");
  const records = database.collection("Routes");
for (let i = 0; i<data["bustime-response"]["routes"].length ; i++){
    var temp = {
    rtr: data["bustime-response"]["routes"][i]["rt"],
    rtnm: data["bustime-response"]["routes"][i]["rtnm"],
    rtclr: data["bustime-response"]["routes"][i]["rtclr"],
    rtdd: data["bustime-response"]["routes"][i]["rtdd"],
  };
  const result=records.insertOne(temp);
}
};

// Vehicle Insert
function Call_Vehicle(data) {

  const uri = "mongodb://127.0.0.1:27017/ChicagoDatabase";
  const client = new MongoClient(uri);
  const database = client.db("ChicagoDatabase");
  const records = database.collection("Vechile");
for (let i = 0; i<data["bustime-response"]["vehicle"].length ; i++){
    var temp = {
    vid: data["bustime-response"]["vehicle"][i]["vid"],
    tmstmp: data["bustime-response"]["vehicle"][i]["tmstmp"],
    lat: data["bustime-response"]["vehicle"][i]["lat"],
    lon: data["bustime-response"]["vehicle"][i]["lon"],
    hdg: data["bustime-response"]["vehicle"][i]["hdg"],
    pid: data["bustime-response"]["vehicle"][i]["pid"],
    rt: data["bustime-response"]["vehicle"][i]["rt"],
    des: data["bustime-response"]["vehicle"][i]["des"],
    pdist: data["bustime-response"]["vehicle"][i]["pdist"],
    dly: data["bustime-response"]["vehicle"][i]["dly"],
    tatripid: data["bustime-response"]["vehicle"][i]["tatripid"],
    origtatripno: data["bustime-response"]["vehicle"][i]["origtatripno"],
    tablockid: data["bustime-response"]["vehicle"][i]["tablockid"],
    zone: data["bustime-response"]["vehicle"][i]["zone"],
  };
  const result=records.insertOne(temp);
}
};

// Insert Direction
function Call_Direction(data) {
  const uri = "mongodb://127.0.0.1:27017/ChicagoDatabase";
  const client = new MongoClient(uri);
  const database = client.db("ChicagoDatabase");
  const records = database.collection("Directions");
for (let i = 0; i<data["bustime-response"]["directions"].length ; i++){
    var temp = {
    dir: data["bustime-response"]["directions"][i]["dir"],
  };
  const result=records.insertOne(temp);
}
};

// Insert Stops
function Call_Stops(data) {
  const uri = "mongodb://127.0.0.1:27017/ChicagoDatabase";
  const client = new MongoClient(uri);
  const database = client.db("ChicagoDatabase");
  const records = database.collection("Stops");
for (let i = 0; i<data["bustime-response"]["stops"].length ; i++){
    var temp = {
    stpid: data["bustime-response"]["stops"][i]["stpid"],
    stpnm: data["bustime-response"]["stops"][i]["stpnm"],
    lat: data["bustime-response"]["stops"][i]["lat"],
    lon: data["bustime-response"]["stops"][i]["lon"],
  };
  const result=records.insertOne(temp);
}
};

// Insert Patterns
function Call_Patterns(data) {
  // This section will help you create a new record.
  const uri = "mongodb://127.0.0.1:27017/ChicagoDatabase";
  const client = new MongoClient(uri);
  const database = client.db("ChicagoDatabase");
  const records = database.collection("Patterns");
for (let i = 0; i<data["bustime-response"]["ptr"].length ; i++){
  var temp1;
  for (let j = 0; j<data["bustime-response"]["ptr"][i]["pt"].length ; j++){
    temp1 = {
      seq:data["bustime-response"]["ptr"][i]["pt"][j]["seq"],
      lat:data["bustime-response"]["ptr"][i]["pt"][j]["lat"],
      lon:data["bustime-response"]["ptr"][i]["pt"][j]["lon"],
      typ:data["bustime-response"]["ptr"][i]["pt"][j]["typ"],
      stpid:data["bustime-response"]["ptr"][i]["pt"][j]["stpid"],
      stpnm:data["bustime-response"]["ptr"][i]["pt"][j]["stpnm"],
      pdist:data["bustime-response"]["ptr"][i]["pt"][j]["pdist"],
    };
    var temp = {
      pid: data["bustime-response"]["ptr"][i]["pid"],
      ln: data["bustime-response"]["ptr"][i]["ln"],
      rtdir: data["bustime-response"]["ptr"][i]["rtdir"],
      pt: temp1,
    };
    const result=records.insertOne(temp);
  }
};

}

// Call Route Api
async function FindRouteAPI() {
  const response = await fetch(
    'http://ctabustracker.com/bustime/api/v2/getroutes?key=ujAhaYu9dy6TAF2VgMLWK5nnV&format=json'
    );
  const data = await response.json();
  Call_Route(data);
}
// Call Vehicle Api
async function FindVehicleAPI() {
  const response = await fetch(
    'https://ctabustracker.com/bustime/api/v2/getvehicles?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&format=json'
    );
  const data = await response.json();
  Call_Vehicle(data);
}
// Call Direction Api
async function FindDirectionAPI() {
  const response = await fetch(
    'http://ctabustracker.com/bustime/api/v2/getdirections?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&format=json'
    );
  const data = await response.json();
  Call_Direction(data);
}
// Call  Stops Api
async function FindStopsAPI() {
  const response = await fetch(
    'https://ctabustracker.com/bustime/api/v2/getstops?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=7&dir=Eastbound&format=json'
    );
  const data = await response.json();
  Call_Stops(data);
}

// Call   Patterns Api
async function FindPatternsAPI() {
  const response = await fetch(
    'https://ctabustracker.com/bustime/api/v2/getpatterns?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&pid=954&format=json'
    );
  const data = await response.json();
  Call_Patterns(data);
}

// Calling the Above Api to fetch the data and store in the API
FindRouteAPI();
FindVehicleAPI();
FindDirectionAPI();
FindStopsAPI();
FindPatternsAPI();


// Check for the conenction of the mongodb
mongoose
  .connect('mongodb://127.0.0.1:27017/ChicagoDatabase').then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)})
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)})


const VechileRoute = require('./routes/Chicago_Vechile.route');
const StopsRoute = require('./routes/Chicago_Stops.route');
const PatternsRoute = require('./routes/Chicago_Patterns.route');
const DirectionRoute = require('./routes/Chicago_Direction.route');
const RoutesRoute = require('./routes/Chicago_Routes.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Defining the Routes for the Each Table
app.use(cors());
app.use('/Chicago-Vechile', VechileRoute);
app.use('/Chicago-Stops', StopsRoute);
app.use('/Chicago-Patterns', PatternsRoute);
app.use('/Chicago-Directions', DirectionRoute);
app.use('/Chicago-RouteSchema', RoutesRoute);

// listening  to the local host 4000 for testing the quries 
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
  next(createError(404));});
  
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);});