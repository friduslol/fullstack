import SCStyles from "../styles/ScheduleCardStyles.module.css"

function ScheduleCard(props) {
    return (
        <div className={SCStyles.scheduleCard}>
            <span>{props.data.endtimeutc}</span>
            <h3 className={SCStyles.programHeader}>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </div>
    )
}

export default ScheduleCard;