import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {


    const [member, setMember] = useState([]);

    useEffect(() => {
        console.log("this is member in usercontext: ", member);
    }, [member])


    const transferRegister = (newUser) => {
        setMember(newUser);
    }

    const values = {
        transferRegister
    };

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;