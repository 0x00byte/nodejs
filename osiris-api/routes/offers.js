var express = require('express');
var router = express.Router();

/*
 * GET userlist.
*/

router.get('/', function(req, res) {
    var db = req.db;
    db.collection('offers').find().toArray(function (err, items) {
        res.json(items);
    });
});

router.get('/:name', function(req, res) {
    var db = req.db;
    var event_name = req.params.name;
    db.collection('events').find( {name: event_name} ).toArray(function (err, items) {
        res.json(items);
        console.log(event_name);
    });
});

router.get('/:name/attendees', function(req, res) {
    var db = req.db;
    db.collection('users').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
