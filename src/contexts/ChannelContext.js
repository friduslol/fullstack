import { createContext, useState, useEffect, useContext } from 'react';
//import { UserContext } from "./UserContext";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
    //const {loggedinUser} = useContext(UserContext);

    const [channels, setChannels] = useState([]);
    const [channelSchedule, setchannelSchedule] = useState([]);
    const [channel, setChannel] = useState(null);
    const [channelPrograms, setChannelPrograms] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryPrograms, setCategoryPrograms] = useState(null);

    // const [tempArray, setTempArray] = useState(null)
    const [faves, setFaves] = useState([]);

    useEffect(() => {
        console.log("this is faves", faves);
    }, [faves])

    const fetchAllChannels = async () => {
        let channelsData = await fetch('api/v1/channels');
        channelsData = await channelsData.json();

        if(channelsData.length === 0) {
            console.log('error something went wrong');
        } else {
            setChannels(channelsData.channels);
        }
    }

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

    const fetchChannel = async (channelId) => {
        try {
            let channelData = await fetch(`/api/v1/channels/channel/${channelId}`);
            channelData = await channelData.json();

            if(!channelData) {
                console.log('something went wrong');
            } else {
                setChannel(channelData);
                setFaves((prevState) => [channelData, ...prevState])
                //return channelData;
            }
        }
        catch(err) {
            console.log(err);
        }
    }

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

    const fetchFaves = async (userId) => {
        let result = await fetch(`/api/v1/favourites/faves/${userId}`);
        result = await result.json();
        if(result.length === 0) {
            console.log("did not get result yet");
        } else {
            loopingChannelId(result);
            console.log(result);
        }
    };

    const loopingChannelId =  (result) => {
        result.map((res =>{
        fetchChannel(res.channelId);
        }))
    }

    const registerRemove = async (channelId) => {
        let result = await fetch(`/api/v1/favourites/faves/${channelId}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          });
          result = await result.json();
          console.log(result)
          console.log("in registerRemove", faves);
          setFaves(faves.filter((fave) => channelId !== fave.channel.id));
    }

    const values = {
        fetchAllChannels,
        fetchSchedule,
        fetchChannel,
        fetchPrograms,
        fetchCategories,
        fetchCategoryPrograms,
        fetchFaves,
        setFaves,
        registerRemove,
        channels,
        channelSchedule,
        channel,
        channelPrograms,
        categories,
        categoryPrograms,
        faves
    };

    return(
    <ChannelContext.Provider value={values}>
        {props.children}
    </ChannelContext.Provider>
    )
}


export default ChannelContextProvider;