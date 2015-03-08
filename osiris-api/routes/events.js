var express = require('express');
var router = express.Router();

/*
 * GET userlist.
*/
router.get('/:name', function(req, res) {
    var db = req.db;
    var event_name = req.params.name;
    db.collection('events').find( {name: event_name} ).toArray(function (err, items) {
        res.json(items);
        console.log(event_name);
    });
});

module.exports = router;
