import { UserContext } from "../contexts/UserContext";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useEffect, useState } from "react";

const Profile = () => {
    const { loggedinUser } = useContext(UserContext);
    const { fetchFaves, faves, setFaves } = useContext(ChannelContext);
    const [removeFav, setRemoveFav] = useState();
    const [userId, setUserId] = useState("");

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

    const handleSave = (fave) => {
        setRemoveFav(fave);
        setUserId(loggedinUser.id);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let removeChannel = {
            removeFav,
            userId
        };

        if(removeChannel.userId) {
            let result = await registerRemove(removeChannel);
            console.log(result);
        } else {
            console.log("something went wrong");
        }
    }


        return (
            <div>
                {loggedinUser ? (
                    <div>
                        <p>{loggedinUser.firstName} {loggedinUser.lastName}</p>
                        <p>{loggedinUser.email}</p>

                        <div>
                            <h2>Favoritkanaler:</h2>
                            {faves.map((fave, i) => (
                                <div onSubmit={handleSubmit}>
                                <p key={i}>{fave.channel.name}</p>
                                <form>
                            <button type="submit" onClick={() => handleSave(fave.channel.name)}>{`ta bort ${fave.channel.name}`}</button>
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