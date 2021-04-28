const sqlite3 = require('sqlite3');
const path = require('path');
const util = require('util');
const Encrypt = require("../Encrypt");

const db = new sqlite3.Database(path.join(__dirname, "../../database/myDb.db"));

db.all = util.promisify(db.all); //for get all users

// const getAllUsers = async (reg, res) => {

//     let query = `SELECT * FROM users`;
//     db.all(query)
//         .then((users) => {
//             res.json(users);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// };

const registerNewUser = (req, res) => {
    let userToRegister = req.body;

    //cheking if user email already exists
    let query = `SELECT * FROM users WHERE email = $email`;
    let params = { $email: userToRegister.email };
    db.get(query, params, (err, userExist) => {
        if(userExist) {
            res.status(400).json({ error: "user with that email already exists"});
            return;
        }
    });

    userToRegister.password = Encrypt.encrypt(req.body.password);
    query = `INSERT INTO users (firstName, lastName, email, password) VALUES ($firstName, $lastName, $email, $password)`;

    params = {
        $firstName: userToRegister.firstName,
        $lastName: userToRegister.lastName,
        $email: userToRegister.email,
        $password: userToRegister.password
    };
    db.run(query, params, function(err) {
        if(err) {
            res.status(400).json({ error: err});
            return;
        }
        res.json({ succsess: "user register seccssfull", lastID: this.lastID});
    });
};

module.exports = {
    // getAllUsers,
    registerNewUser
}