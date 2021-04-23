import ChannelCard from "./ChannelCard";
import { ChannelContext} from "../contexts/ChannelContext";
import { useContext, useEffect } from "react";


function ChannelWrapper() {
    const { channels } = useContext(ChannelContext);
    console.log("this is in channelW: ", channels)

    return (
        <div className="channelWrapper">
            {channels.length > 0 && channels.map((channel, i) => (
                //sending props to channelCard
                <ChannelCard key={i} data={channel} />
            ))}
        </div>
    )
}

export default ChannelWrapper;