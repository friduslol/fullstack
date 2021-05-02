import React, { useContext, useState } from 'react';
import CCStyles from '../styles/ChannelCardStyles.module.css';
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"

function ChannelCard(props) {
    const { loggedinUser, registerFav } = useContext(UserContext);
    const historyHook = useHistory();

    const [userId, setUserId] = useState("");
    const [channelId, setChannelId] = useState("");
    const [channelName, setChannelName] = useState("");

    const clickToRender = () => {
        //using channel name to create new unique route
        historyHook.push(`/details/${props.data.id}`);
    }

    const handleSave = () => {
        setUserId(loggedinUser.id);
        setChannelId(props.data.id);
        setChannelName(props.data.name);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let favChannel = {
            userId,
            channelId,
            channelName
        }
        if(favChannel.userId) {
            let result = await registerFav(favChannel);
            console.log(result);
        } else {
            console.log("oupsi could not save channel");
        }
    }

    return (
        <div className={CCStyles.channelCard}>
            <div className={CCStyles.imgWrapper}>
                <img className={CCStyles.channelImg} src={props.data.image} alt={`for channel ${props.data.name}`}></img>
            </div>
            <div className={CCStyles.channelInfor}>
                <h3>{props.data.name}</h3>
                <p>{props.data.tagline}</p>

                <p onClick={clickToRender}>{`Klicka för kanal ${props.data.name} >>`}</p>
                {loggedinUser ? (
                    <div onSubmit={handleSubmit}>
                        <form>
                            <button type="submit" onClick={handleSave}>SPARA Kanal</button>
                        </form>
                    </div>
                ) : <div></div>}
            </div>
        </div>
    )
}

export default ChannelCard;