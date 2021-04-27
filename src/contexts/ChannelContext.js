import { createContext, useState, useEffect } from 'react';

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
    const [channels, setChannels] = useState([]);
    const [channelSchedule, setchannelSchedule] = useState([]);
    const [channel, setChannel] = useState(null);
    const [channelPrograms, setChannelPrograms] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryPrograms, setCategoryPrograms] = useState(null);

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

            if(!channelData) {
                console.log('something went wrong');
            } else {
                setChannel(channelData);
                //return channelData;
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    //for fetching programs from unique channel
    const fetchPrograms = async (channelId) => {
        try {
            let programs = await fetch(`/api/v1/channels/programs/${channelId}`);
            programs = await programs.json();

            if(programs.length === 0) {
                console.log('something went wrong');
            } else {
                setChannelPrograms(programs);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    //for fetching categories
    const fetchCategories = async () => {
        try {
            let categoriesData = await fetch(`/api/v1/channels/categories`);
            categoriesData = await categoriesData.json();

            if(categoriesData.length === 0){
                console.log('something went wrong');
            } else {
                setCategories(categoriesData);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    const fetchCategoryPrograms = async (programcategoryid) => {
        try {
            let programsData = await fetch(`/api/v1/channels/programs/category/${programcategoryid}`);
            programsData = await programsData.json();

            if(programsData.length === 0){
                console.log("something went oupsi");
            } else {
                setCategoryPrograms(programsData.programs);
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
        fetchPrograms,
        fetchCategories,
        fetchCategoryPrograms,
        //saveChannelId,
        channels,
        channelSchedule,
        channel,
        channelPrograms,
        categories,
        categoryPrograms
    };

    return(
    <ChannelContext.Provider value={values}>
        {props.children}
    </ChannelContext.Provider>
    )
}


export default ChannelContextProvider;