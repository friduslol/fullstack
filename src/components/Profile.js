import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";

const Profile = () => {
    const { loggedinUser } = useContext(UserContext);

    useEffect(() => {
        console.log("in profile", loggedinUser);
    }, [loggedinUser])


        return (
            <div>
                <h1>User page</h1>
                {loggedinUser ? (
                    <div>
                        <p>{loggedinUser.firstName} {loggedinUser.lastName}</p>
                        <p>{loggedinUser.email}</p>

                        <div>
                            <h2>Favoritkanaler:</h2>
                        </div>
                        <div>
                            <h2>FavoritProgram:</h2>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>loading...</p>
                    </div>
                )}
            </div>
        )

}

export default Profile;