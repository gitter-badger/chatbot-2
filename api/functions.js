var express = require('express');
var querystring = require("querystring");
var TextSearch = require("./TextSearch.js");
var internalfunctions = {

}
exports.gethi = function (req,res) {
  console.log("Calling simple get call.....");
  res.jsonp("success")
};

exports.airportlist = function(req, res){
 //var key = req.query.key;
 //var location = encodeURIComponent(req.query.location);
 var radius = 16000;
 var sensor = false;
 var types = "restaurant";
 var query = "fast";
 var https = require('https');
 var parameters = {
                  query: "private airports in"+req
              };
 parameters.key = "AIzaSyBfRKuwq8c3ETUxdC7jMvhh3iN_x0SHRWQ";
 parameters.query = parameters.query || "airports";
 parameters.sensor = parameters.sensor || false;
 if (typeof parameters.location === "object") parameters.location = parameters.location.toString();

 var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?" +querystring.stringify(parameters)
   console.log(url);
 https.get(url, function(response) {
   var body ='';
   response.on('data', function(chunk) {
     body += chunk;
   });
   response.setEncoding("utf8");
   response.on('end', function() {
     var places = JSON.parse(body);
       var locations = places.results;
       //var airports = JSON.parse(places);
       //console.log(places);
     res.json(locations);
   });
 }).on('error', function(e) {
   console.log("Got error: " + e.message);
 });
};

module.exports = ifunctions;
