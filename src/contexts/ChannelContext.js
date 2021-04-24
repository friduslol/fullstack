import { createContext, useState, useEffect } from 'react';

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        console.log("runs on rendering");
        fetchAllChannels();
        // eslint-disable-next-line
    }, [])


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

    const values = {
        fetchAllChannels,
        channels
    };

    return(
    <ChannelContext.Provider value={values}>
        {props.children}
    </ChannelContext.Provider>
    )
}


export default ChannelContextProvider;