import React from 'react';
import CCStyles from '../styles/ChannelCardStyles.module.css';
import { useHistory } from "react-router-dom";

//receiving props from parent CardsWrapper
function ChannelCard(props) {
    const historyHook = useHistory();

    const ClickToRender = () => {
        //using channel name to create new unique route
        historyHook.push(`/details/${props.data.name}`);
    }

    return (
        <div className={CCStyles.channelCard}>
            <div className={CCStyles.imgWrapper}>
                <img className={CCStyles.channelImg} src={props.data.image} alt={`for channel ${props.data.name}`}></img>
            </div>
            <div className={CCStyles.channelInfor}>
                <h3>{props.data.name}</h3>
                <p>{props.data.tagline}</p>

                <p onClick={ClickToRender}>{`Klicka för kanal ${props.data.name} >>`}</p>
            </div>
        </div>
    )
}

export default ChannelCard;