import ScheduleCard from "./ScheduleCard";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext } from "react";
import SCStyles from "../styles/ScheduleCardStyles.module.css"


function ScheduleWrapper() {
    const { channelSchedule } = useContext(ChannelContext);

    return (
        <div className={SCStyles.scheduleWrapper}>
            <h2 className={SCStyles.scheduleHeader}>Dagens sändningar</h2>
            {channelSchedule.map((program, i) => (
                //sending props to sheduleCard
                <ScheduleCard key={i} data={program} />
            ))}
        </div>
    )
}

export default ScheduleWrapper;