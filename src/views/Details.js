import DStyles from "../styles/DetailsStyles.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useState, useEffect } from "react";
import ScheduleWrapper from "../components/ScheduleWrapper";

const Details = (props) => {
    const { channels, channelSchedule, fetchSchedule } = useContext(ChannelContext);

    const [detailChannel, setDetailChannel] = useState(null);


    useEffect(() => {
        fetchSchedule();
        // eslint-disable-next-line
    }, [])

    console.log("this is in detailsP", channelSchedule);

    useEffect(() => {
        if(channels) {
            //finding the right channel and uppdating sate variable with data
            setDetailChannel(channels.find((channel) => channel.name == props.match.params.name));
        }
    }, [channels])

    const renderDetails = () => {
        return(
            <div className={DStyles.DetailsWrapper}>
                <h1 className={DStyles.DetailsHeader}>Dagens sändningar för {detailChannel.name}</h1>
                <ScheduleWrapper />
            </div>
        );
    };

    //if detailChannel is true den calling on func to render page, if not error msg will show
    return detailChannel ? renderDetails() : <p>404, Error something went wrong!</p>

}

export default Details;