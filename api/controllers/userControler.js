const sqlite3 = require('sqlite3');
const path = require('path');
const util = require('util');
const Encrypt = require("../Encrypt");

const db = new sqlite3.Database(path.join(__dirname, "../../database/myDb.db"));

db.all = util.promisify(db.all); //for get all users

const loginUser = (req, res) => {
    let query = `SELECT * FROM users WHERE email = $email`;
    let params = { $email: req.body.email };

    db.get(query, params, (err, userInDB) => {
        if (!userInDB) {
          res.status(401).json({ error: "Bad credentials" });
          return;
        }
        req.body.password = Encrypt.encrypt(req.body.password);
        if (userInDB.password === req.body.password) {
          delete userInDB.password;
          req.user = userInDB;
        //   res.json({ success: "Login successfull", loggedInUser: userInDB });
          res.json(userInDB);
          return;
        } else {
          res.status(401).json({ error: "Bad credentials" });
          return;
        }
    });
}

const registerNewUser = (req, res) => {
    let userToRegister = req.body;

    //cheking if user email already exists
    let query = `SELECT * FROM users WHERE email = $email`;
    let params = { $email: userToRegister.email };
    db.get(query, params, (err, result) => {
        console.log("result: ", result);
        if(result) {
            res.json({ error: "User with this email already exsits!" });
        } else {
            userToRegister.password = Encrypt.encrypt(userToRegister.password);
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
        }
    });
}


module.exports = {
    // getAllUsers,
    registerNewUser,
    loginUser,
    // saveChannel
    // whoami
}