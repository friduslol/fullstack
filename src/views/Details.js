import DStyles from "../styles/DetailsStyles.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useState, useEffect } from "react";
import ScheduleWrapper from "../components/ScheduleWrapper";

const Details = (props) => {
    const { fetchSchedule, fetchChannel, channel } = useContext(ChannelContext);

    useEffect(() => {
        //sending argumnet with the unique channel id, avalible from useHistory hook.
        fetchSchedule(props.match.params.id);
        fetchChannel(props.match.params.id);
    }, [])

    const renderDetails = () => {
        return(
            <div className={DStyles.DetailsWrapper}>
                <h1 className={DStyles.DetailsHeader}>Dagens sändningar för {channel.channel.name}</h1>
                <ScheduleWrapper />
            </div>
        );
    };

    //if detailChannel is true den calling on func to render page, if not error msg will show
    return channel ? renderDetails() : <p>404, Error something went wrong!</p>

}

export default Details;