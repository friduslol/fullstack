import DStyles from "../styles/DetailsStyles.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useState, useEffect } from "react";
import ScheduleWrapper from "../components/ScheduleWrapper";
import ProgramWrapper from "../components/ProgramWrapper"

const Details = (props) => {
    const { fetchSchedule, fetchChannel, fetchPrograms, channel } = useContext(ChannelContext);

    useEffect(() => {
        //sending argumnet with the unique channel id, avalible from useHistory hook.
        fetchSchedule(props.match.params.id);
        fetchChannel(props.match.params.id);
        fetchPrograms(props.match.params.id);
    // eslint-disable-next-line
    }, [])

    const renderDetails = () => {
        return(
            <div className={DStyles.detailsPage}>
                <h1 className={DStyles.detailsHeader}>Dagens sändningar för {channel.channel.name}</h1>

                <div className={DStyles.detailsWrapper}>
                    <ScheduleWrapper />
                    <ProgramWrapper />
                </div>
            </div>
        );
    };

    //if detailChannel is true den calling on func to render page, if not error msg will show
    return channel ? renderDetails() : <p>404, Error something went wrong!</p>

}

export default Details;