import { createContext, useState, useEffect } from 'react';

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
    const [channels, setChannels] = useState([]);
    const [channelSchedule, setchannelSchedule] = useState([]);
    // const [channelId, setChannelId] = useState(-1);

    // const saveChannelId = (channelId) => {
    //     if(!channelId) {
    //         console.log("no channelId is saved");
    //     } else {
    //         setChannelId(channelId);
    //     }
    // }



    //for fetching data about channels
    const fetchAllChannels = async () => {
        let channelsData = await fetch('api/v1/channels');
        channelsData = await channelsData.json();

        if(channelsData.length === 0) {
            console.log('error something went wrong');
        } else {
            setChannels(channelsData.channels);
        }
    }

    //for fetching channel schedule
    const fetchSchedule = async (channelId) => {
        try {
            let scheduleData = await fetch(`/api/v1/channels/schedule/${channelId}`);
            scheduleData = await scheduleData.json();

            if(scheduleData.length === 0) {
                console.log('something went wrong');
            } else {
                setchannelSchedule(scheduleData);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    //for fetching data about unique channel
    const fetchChannel = async (channelId) => {
        try {
            let channelData = await fetch(`/api/v1/channels/channel/${channelId}`);
            channelData = await channelData.json();

            if(channelData.length === 0) {
                console.log('something went wrong');
            } else {
                // setChannel(channelData);
                return channelData;
            }
        }
        catch(err) {
            console.log(err);
        }
    }






    const values = {
        fetchAllChannels,
        fetchSchedule,
        fetchChannel,
        //saveChannelId,
        channels,
        channelSchedule
    };

    return(
    <ChannelContext.Provider value={values}>
        {props.children}
    </ChannelContext.Provider>
    )
}


export default ChannelContextProvider;