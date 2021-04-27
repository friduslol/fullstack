import DStyles from "../styles/DetailsStyles.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useState, useEffect } from "react";
import ScheduleWrapper from "../components/ScheduleWrapper";

const Details = (props) => {
    const { channels, fetchSchedule, fetchChannel } = useContext(ChannelContext);

    const [detailChannel, setDetailChannel] = useState(null);

    useEffect(() => {
        //sending argumnet with the unique channel id from avalible from useHistory hook.
        fetchSchedule(props.match.params.id);

        //sendig id for func and saving retun value from func in variable
        let channel = fetchChannel(props.match.params.id);

        setDetailChannel(channel);
    }, [channels])

    const renderDetails = () => {
        return(
            <div className={DStyles.DetailsWrapper}>
                <h1 className={DStyles.DetailsHeader}>Dagens sändningar för {detailChannel.name}</h1>
                {console.log("this is channel in detailsP: ", detailChannel)}
                <ScheduleWrapper />
            </div>
        );
    };

    //if detailChannel is true den calling on func to render page, if not error msg will show
    return detailChannel ? renderDetails() : <p>404, Error something went wrong!</p>

}

export default Details;