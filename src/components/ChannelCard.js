import React, { useContext } from 'react';
import CCStyles from '../styles/ChannelCardStyles.module.css';
import { useHistory } from "react-router-dom";
import { ChannelContext } from "../contexts/ChannelContext";

//receiving props from parent CardsWrapper
function ChannelCard(props) {
    const historyHook = useHistory();
    const { saveChannelId } = useContext(ChannelContext);

    const clickToSave = (e) => {
        e.stopPropagation();
        saveChannelId(props.data.id);
    }

    const clickToRender = () => {
        //using channel name to create new unique route
        historyHook.push(`/details/${props.data.name}`);
    }

    return (
        <div className={CCStyles.channelCard} onClick={clickToSave}>
            <div className={CCStyles.imgWrapper}>
                <img className={CCStyles.channelImg} src={props.data.image} alt={`for channel ${props.data.name}`}></img>
            </div>
            <div className={CCStyles.channelInfor}>
                <h3>{props.data.name}</h3>
                <p>{props.data.tagline}</p>

                <p onClick={clickToRender}>{`Klicka för kanal ${props.data.name} >>`}</p>
            </div>
        </div>
    )
}

export default ChannelCard;