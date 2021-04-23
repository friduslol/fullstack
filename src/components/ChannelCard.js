import React from 'react';

function ChannelCard(props) {

    console.log(props);
    return (
        <div className="channelCard">
            <p>{props.data.channel}</p>
            <p>hej</p>
        </div>
    )
}

export default ChannelCard;