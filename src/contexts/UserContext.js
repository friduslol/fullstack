import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {


    // const [member, setMember] = useState([]);

    // useEffect(() => {
    //     console.log("this is member in usercontext: ", member);
    // }, [member])


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

    const values = {
        registerNewUser
    };

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;