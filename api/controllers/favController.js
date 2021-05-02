const sqlite3 = require('sqlite3');
const path = require('path');
const util = require('util');

const db = new sqlite3.Database(path.join(__dirname, "../../database/myDb.db"));

const saveChannel = (req, res) => {
    let channelToRegister = req.body;

    let query = `SELECT * FROM favourites WHERE channelId = $channelId AND userId = $userId`;
    console.log(channelToRegister);
    let params = { $channelId: channelToRegister.channelId, $userId: channelToRegister.userId };
    db.get(query, params, (err, result) => {
        console.log("result: ", result);
        if(result) {
            res.json({ error: "channel is already saved!" });
        } else {
            query = `INSERT INTO favourites (userId, channelId, channelName) VALUES ($userId, $channelId, $channelName)`;

            params = {
                $userId: channelToRegister.userId,
                $channelId: channelToRegister.channelId,
                $channelName: channelToRegister.channelName
            };

            db.run(query, params, function(err) {
                if(err) {
                    res.status(400).json({ error: err});
                    return;
                }
                res.json({ succsess: "favchannel register successfull", lastID: this.lastID});
            });
        }
    })
}

const getfaves = (req, res) => {
    let query = `SELECT * FROM favourites WHERE userId = $userId`;
    let params = { $userId: req.params.userId};
    db.all(query, params, (err, channels) => {
        console.log("in fetfaves", channels);
        res.json(channels);
      });

}

const removeFave = (req, res) => {
    let removeChannel = req.body;
    console.log(removeChannel);
    let query = `DELETE FROM favourites WHERE channelId = $channelId AND userId = $userId`;
    let params = { $channelId: removeChannel.channelId, $userId: removeChannel.userId };

    db.run(query, params, function (err) {
        res.json({ success: "Channel has been deleted", changes: this.changes });
      });
}

module.exports = {
    saveChannel,
    getfaves,
    removeFave
}