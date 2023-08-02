var express = require('express');
var router = express.Router();
var axios = require('axios')
// get_Method 
router.get('/get', function (req, res) {
  axios.post('http://localhost:9000/finds', req.body)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      res.send(error);
    })
});
// filter 
router.get('/filter', function (req, res) {
  axios.post('http://localhost:9000/filter', req.body)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      res.send(error);
    })
});
// InsertMany
router.post('/insert', function (req, res) {
  axios.post('http://localhost:9000/InsertMany', req.body)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data)
    })
    .catch(function (error) {
      res.send(error);
    })
});
// insert_one  
router.post('/insert', function (req, res) {
  axios.post('http://localhost:9000/InsertMany', req.body)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data)
    })
    .catch(function (error) {
      res.send(error);
    })
});
// delect 
router.get('/Delete', function (req, res) {
  axios.patch('http://localhost:9000/findoneanddelete', req.body)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      res.send(error);
    })
});
// findByIdAndUpdate
router.post('/findByIdAndUpdate', function (req, res) {
  axios.post('http://localhost:9000/findByIdAndUpdate', req.body)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data)
    })
    .catch(function (error) {
      res.send(error);
    })
});
// findById
router.get('/findById', function (req, res) {
  axios.post('http://localhost:9000/findById', req.body)
    .then(function (response) {
      //console.log(response.data);
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    })
});
// findOneAndRemove
router.post('/findOneAndRemove', function (req, res) {
  axios.post('http://localhost:9000/findOneAndRemove', req.body)
    .then(function (response) {
      //console.log(response.data);
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    })
});
// findByIdAndDelete
router.delete('/findbyidanddelete', function (req, res) {
  axios.post('http://localhost:9000/findOneAndRemove', req.body)
    .then(function (response) {
      //console.log(response.data);
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    })
});
module.exports = router;
