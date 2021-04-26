import SCStyles from "../styles/ScheduleCardStyles.module.css"

function ScheduleCard(props) {
    return (
        <div className={SCStyles.scheduleCard}>
            <h3>{props.data.title}</h3>
             <span>{props.data.endtimeutc}</span>
        </div>
    )
}

export default ScheduleCard;