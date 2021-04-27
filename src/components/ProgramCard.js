import PCStyles from "../styles/ProgramCardStyles.module.css"

function ProgramCard(props) {
    return (
        <div className={PCStyles.programCard}>
            <p>{props.data.name}</p>
        </div>
    )
}

export default ProgramCard;