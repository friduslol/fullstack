import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [loggedinUser, setLoggedinUser] = useState(false);

    // const [member, setMember] = useState([]);

    // useEffect(() => {
    //     console.log("this is member in usercontext: ", member);
    // }, [member])

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

    const values = {
        registerNewUser,
        loginUser,
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