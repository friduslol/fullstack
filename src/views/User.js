import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const User = () => {
    const { isLoggedin } = useContext(UserContext);

    return (
        <div>
            <h1>User page</h1>
            {isLoggedin ? (
                <Profile />
            ) : (
                <div>
                    <Register />
                    <Login />
                </div>
            )}
        </div>
    )
}

export default User;