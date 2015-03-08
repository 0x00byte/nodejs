var express = require('express');
var router = express.Router();

/*
 * GET userlist.
*/
router.get('/:name', function(req, res) {
    var db = req.db;
    var user_name = req.params.name;
    db.collection('users').find( { username: user_name } ).toArray(function (err, items) {
        res.json(items);
        console.log(user_name);
    });
});

router.get('/:name/:event', function(req, res) {
    var db = req.db;
    var user_name = req.params.name;
    var event_name = req.params.event;
    db.collection('events').find( { name: event_name } ).toArray(function (err, items) {
        res.json(items);
        console.log(user_name);
    });
});

module.exports = router;
