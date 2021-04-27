import ProgramCard from "./ProgramCard";
import { ChannelContext } from "../contexts/ChannelContext";
import { useContext } from "react";
import PCStyles from "../styles/ProgramCardStyles.module.css"


function ProgramWrapper() {
    const { channelPrograms } = useContext(ChannelContext);

    return (
        <div className={PCStyles.programWrapper}>
            <h2 className={PCStyles.programHeader}>Program:</h2>
            {channelPrograms.map((program, i) => (
                //sending props to sheduleCard
                <ProgramCard key={i} data={program} />
            ))}
        </div>
    )
}

export default ProgramWrapper;