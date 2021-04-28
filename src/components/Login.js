import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";

const Login = () => {
    const { loginUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateUserEmail = (e) => setEmail(e.target.value);
    const updateUserPassword = (e) => setPassword(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let user = {
            email,
            password
        };

        if(user) {
            let result = await loginUser(user);
            console.log(result);
        } else {
            console.log("oupsi could not login user");
        }
    }


    return(
        <div onSubmit={handleSubmit}>
            <form>
                <h2>Logga in</h2>
                <input type="text" onChange={updateUserEmail} placeholder="email" required></input>
                <input type="password" onChange={updateUserPassword} placeholder="Lösenord" required></input>
                <button type="submit">Logga in</button>
            </form>
        </div>
    )
}

export default Login;