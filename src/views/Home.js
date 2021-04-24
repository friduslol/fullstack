import { useContext, useEffect } from 'react';
import { ChannelContext } from '../contexts/ChannelContext';
import ChannelWrapper from '../components/ChannelWrapper';

const Home = () => {
    const { channels } = useContext(ChannelContext);
    console.log("this is in homeP: ", channels)

    return(
        <div className="Home">
            <h1>Lyssna på dina favorit Kanaler</h1>
            <ChannelWrapper />
        </div>
    )
};

export default Home;