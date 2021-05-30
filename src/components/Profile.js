import { UserContext } from "../contexts/UserContext";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useEffect, useState } from "react";

const Profile = () => {
    const { loggedinUser, logout } = useContext(UserContext);
    const { fetchFaves, fetchFavePrograms, faves, faveP, setFaves, registerRemove } = useContext(ChannelContext);

    useEffect(() => {
        if(loggedinUser) {
            fetchFaves(loggedinUser.id)
            fetchFavePrograms(loggedinUser.id)
        }
        console.log("in profile", loggedinUser);

        //this sets the faves to an empty array when component is unmounted, otherwise the prevstate vill duplicate faves
        return () => {
           setFaves([]);
        };
    }, [loggedinUser])

    const handleLogOut = (e) => {
        e.preventDefault();
        logout();
      };

    const handleSave = async (e, channelId) => {
        e.preventDefault();


        registerRemove(channelId, loggedinUser.id);
    }

        return (
            <div>
                {loggedinUser ? (
                    <div>
                        <p>{loggedinUser.firstName} {loggedinUser.lastName}</p>
                        <p>{loggedinUser.email}</p>
                        <button type="button" onClick={handleLogOut}>Logga ut</button>
                        <div>
                            <h2>Favoritkanaler:</h2>
                            {faves.map((fave, i) => (
                                <div key={i}>
                                <p>{fave.channel.name}</p>
                                <p>{fave.channel.tagline}</p>
                                <form>
                                    <button type="submit" onClick={(e) => handleSave(e, fave.channel.id)}>{`ta bort ${fave.channel.name}`}</button>
                                </form>
                            </div>
                            ))}
                            <h2>FavoritProgram:</h2>
                            {faveP && faveP.map((fave, i) => (
                                <div key={i}>
                                    <p>{fave.programName}</p>
                                </div>
                            ) )}
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