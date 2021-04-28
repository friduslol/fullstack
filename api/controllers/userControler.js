const sqlite3 = require('sqlite3');
const path = require('path');
const util = require('util');

const db = new sqlite3.Database(path.join(__dirname, "../../database/myDb.db"));

db.all = util.promisify(db.all); //for get all users

const getAllUsers = async (reg, res) => {
    let query = `SELECT * FROM users`;
    db.all(query)
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    getAllUsers
}