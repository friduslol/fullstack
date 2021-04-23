import { useContext, useEffect } from 'react';
import { ChannelContext } from '../contexts/ChannelContext';

const Home = () => {
    const { fetchAllChannels, channels } = useContext(ChannelContext);
    console.log("this is in homeP: ", channels)

    useEffect(() => {
        console.log("runs on rendering");
        fetchAllChannels();
        // eslint-disable-next-line
    }, [])

    return(
        <div className="Home">
            <h1>Lyssna på dina favorit Kanaler</h1>
            <p>{}</p>
        </div>
    )
};

export default Home;