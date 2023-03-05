let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Getting the Schema of the Direction Table 
let Get_Schema = require('../models/Directions');

// Creation Operation
router.route('/create-direction').post((req, res, next) => {
  Get_Schema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)}
    })
});
// Finding All Enteries in Table Operation
router.get('/findall', function(req, res) {
    Get_Schema.find(function(err, data) {
        if(err){
            console.log(err);}
        else{
            res.send(data);}
    });  
 });

// Finding the Enteries in the Table by the Id
router.route('/edit-direction/:id').get((req, res) => {
    Get_Schema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)} 
        else {
        res.json(data)}
    })
  })

// Finding the Enteries in the table by dir attribute
router.route('/Get-direction-of/:dir').get((req, res) => {
    Get_Schema.find({dir:req.params.dir},function(error, data){
      if (error) {
        return next(error)} 
        else {
        res.json(data)}
    });
  });

  // Updating Operation
router.route('/update-direction-of/:id').put((req, res, next) => {
    Get_Schema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)} 
        else {
        res.json(data)
        console.log('Updated successfully !')}
    })
  })

// Delete Operation
router.route('/delete-direction-of/:id').delete((req, res, next) => {
    Get_Schema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);} 
        else {
        res.status(200).json({
          msg: data})
      }
    })
  })

module.exports = router;