import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [loggedinUser, setLoggedinUser] = useState(false);
    const [faves, setFaves] = useState();

    useEffect(() => {
        console.log(isLoggedin, loggedinUser);
    }, [loggedinUser])

    const registerNewUser = async (newUser) => {
        let result = await fetch("api/v1/users/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        result = await result.json();
        return result;
    }

    const loginUser = async (user) => {
        let result = await fetch("api/v1/users/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        result = await result.json();
        //return result;

        if(result.firstName) {
            setIsLoggedin(true)
            setLoggedinUser(result);
        } else {
            console.log("ojoj something went wrong");
        }
    }

    const registerFav = async (favChannel) => {
        let result = await fetch("api/v1/favourites/saveChannel", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(favChannel),
        });
        result = await result.json();
        return result;
    }

    const values = {
        registerNewUser,
        loginUser,
        registerFav,
        setLoggedinUser,
        setIsLoggedin,
        isLoggedin,
        loggedinUser
    };

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;