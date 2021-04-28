import RStyles from "../styles/RegisterStyles.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
    const { transferRegister } = useContext(UserContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateUserFName = (e) => setFirstName(e.target.value);
    const updateUserLName = (e) => setLastName(e.target.value);
    const updateUserEmail = (e) => setEmail(e.target.value);
    const updateUserPassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newUser = null;
        newUser = {
            firstName,
            lastName,
            email,
            password
        }

        if(newUser) {
            transferRegister(newUser);
        } else {
            console.log("oupsi could not create user");
        }
    }

    return (
        <div className={RStyles.registerWrapper} onSubmit={handleSubmit}>
            <form>
                <h2>Skapa Konto</h2>
                <input type="text" onChange={updateUserFName} placeholder="Förnamn" required></input>
                <input type="text" onChange={updateUserLName} placeholder="Efternamn" required></input>
                <input type="text" onChange={updateUserEmail} placeholder="email" required></input>
                <input type="password" onChange={updateUserPassword} placeholder="Lösenord" required></input>
                <button type="submit">Skapa Konto</button>
            </form>
        </div>
    )
}

export default Register;