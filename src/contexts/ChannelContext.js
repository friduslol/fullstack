import { createContext, useState, useEffect } from 'react';

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
    const [channels, setChannels] = useState([]);
    const [channelSchedule, setchannelSchedule] = useState([]);
    const [channelId, setChannelId] = useState([]);

    useEffect(() => {
        console.log("runs on rendering");
        fetchAllChannels();
        // eslint-disable-next-line
    }, [])


    const saveChannelId = (channelId) => {
        if(!channelId) {
            console.log("no channelId is saved");
        } else {
            setChannelId(channelId);
        }
    }

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

    const fetchSchedule = async () => {
        let scheduleData = await fetch(`/api/v1/channels/schedule/${channelId}`);
        scheduleData = await scheduleData.json();

        if(scheduleData.length === 0) {
            console.log('something went wrong');
        } else {
            setchannelSchedule(scheduleData.schedule);
        }
    }





    const values = {
        fetchAllChannels,
        fetchSchedule,
        saveChannelId,
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