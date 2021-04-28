const register = (req, res) => {
    let userToRegister = req.body;

    // Before trying to register the user, lets find out if the user already exists
    let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;
    let params = { $email: userToRegister.email };
    db.get(query, params, (err, result) => {
      console.log("result: ", result);
      if (result) {
        res.json({ error: "User with that email already exists" });
      } else {

      // Denna kod nedan låg förut utanför db.get:s callback-funktion, nu ligger den innuti istället
        userToRegister.password = Encrypt.encrypt(userToRegister.password);
        query = /*sql*/ `INSERT INTO users (userName, email, password) VALUES ($userName, $email, $password)`;
        params = {
          $userName: userToRegister.userName,
          $email: userToRegister.email,
          $password: userToRegister.password,
        };

        db.run(query, params, function (err) {
          if (err) {
            res.status(400).json({ error: err });
            return;
          }
          res.json({ success: "User register successfull", lastID: this.lastID });
        });
      }
    });
  };