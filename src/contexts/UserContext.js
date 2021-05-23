import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    // const [isLoggedin, setIsLoggedin] = useState(false);
    const [loggedinUser, setLoggedinUser] = useState(false);
    const [faves, setFaves] = useState();

    useEffect(() => {
        console.log( loggedinUser);
    }, [loggedinUser])

    useEffect(() => {
        getCookie();
    // eslint-disable-next-line
    }, [])

    const getCookie = async () => {
        let result = await fetch("api/v1/users/getCookie");
        result = await result.json();

        setLoggedinUser(result);
        console.log("in getcookie", result);
    }

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
            //setIsLoggedin(true)
            setLoggedinUser(result);
        } else {
            console.log("ojoj something went wrong");
        }
    }

    const registerFav = async (fave) => {
        let result = await fetch("api/v1/favourites/saveFave", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(fave),
        });
        result = await result.json();
        return result;
    }

    const logout = async () => {
        let result = await fetch("api/v1/users/logout");
        result = await result.json();
        setLoggedinUser(false);
        console.log(result);
    }

    const values = {
        registerNewUser,
        loginUser,
        registerFav,
        setLoggedinUser,
        loggedinUser,
        logout
    };

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;