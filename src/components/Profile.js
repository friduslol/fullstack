import { UserContext } from "../contexts/UserContext";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useEffect, useState } from "react";

const Profile = () => {
    const { loggedinUser, setIsLoggedin, setLoggedinUser } = useContext(UserContext);
    const { fetchFaves, faves, setFaves, registerRemove } = useContext(ChannelContext);

    //const [channelId, setChannelId] = useState();
    //const [userId, setUserId] = useState("");

    useEffect(() => {
        if(loggedinUser) {
            fetchFaves(loggedinUser.id)
        }
        console.log("in profile", loggedinUser);

        //this sets the faves to an empty array when component is unmounted, otherwise the prevstate vill duplicate faves
        return () => {
           setFaves([]);
        };
    }, [loggedinUser])

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedin(false);
        setLoggedinUser(false);
      };

    // useEffect(() => {
    //     return () => {
    //         setFaves(null);
    //     };
    // }, []);

    // const getFavChannels = (faves) => {
    //     faves.map((fave, i) => {
    //     channels = fetchCannelById(fave.channelId);
    //     return setFavChannel(channels)
    //     })
    // }

    // const handleSave = (id) => {
    //     setChannelId(id);
    //     //setUserId(loggedinUser.id);
    // }

    const handleSave = async (e, channelId) => {
        e.preventDefault();

        registerRemove(channelId);
        // let removeChannel = {
        //     channelId,
        //     // userId
        // };

        // if(removeChannel.channelId) {
        //     let result = await
        //     console.log("hej", result);
        // } else {
        //     console.log("something went wrong");
        // }
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
                                <div>
                                <p key={i}>{fave.channel.name}</p>
                                <form>
                                    <button type="submit" onClick={(e) => handleSave(e, fave.channel.id)}>{`ta bort ${fave.channel.name}`}</button>
                                </form>
                            </div>
                            ))}
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