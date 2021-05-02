import ChannelCard from "./ChannelCard";
import { ChannelContext} from "../contexts/ChannelContext";
import { useContext } from "react";
import CCStyles from '../styles/ChannelCardStyles.module.css';


function ChannelWrapper() {
    const { channels } = useContext(ChannelContext);

    return (
        <div className={CCStyles.channelWrapper}>
            {channels.map((channel, i) => (
                <ChannelCard key={i} data={channel} />
            ))}
        </div>
    )
}

export default ChannelWrapper;