import { createContext, useState } from 'react';

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
    const [channels, setChannels] = useState([]);


    //for fetching data about channels 
    const fetchAllChannels = async () => {
        let channelsData = await fetch('api/v1/channels');
        channelsData = await channelsData.json();

        if(channelsData.length === 0) {
            console.log('error something went wrong');
        } else {
            setChannels(channelsData);
        }
    }

    const values = {
        fetchAllChannels,
        channels
    };

    return(
    <ChannelContext.Provider value={values}>{props.children}</ChannelContext.Provider>
    )
}


export default ChannelContextProvider;