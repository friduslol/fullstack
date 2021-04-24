import React from 'react';
import { Redirect } from 'react-router-dom';
import CCStyles from '../styles/ChannelCardStyles.module.css';

function ChannelCard(props) {

    return (
        <div className={CCStyles.channelCard}>
            <div className={CCStyles.imgWrapper}>
                <img className={CCStyles.channelImg} src={props.data.image} alt={`for channel ${props.data.name}`}></img>
            </div>
            <div className={CCStyles.channelInfor}>
                <h3>{props.data.name}</h3>
                <p>{props.data.tagline}</p>
                <a href="">{`Klicka för kanal ${props.data.name} >>`}</a>
            </div>
        </div>
    )
}

export default ChannelCard;