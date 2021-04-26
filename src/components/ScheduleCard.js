import SCStyles from "../styles/ScheduleCardStyles.module.css"

function ScheduleCard(props) {
    return (
        <div className={SCStyles.scheduleCard}>
            <h3>{props.data.title}</h3>
        </div>
    )
}

export default ScheduleCard;