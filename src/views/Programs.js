import { useContext, useEffect } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import PStyles from '../styles/ProgramsStyles.module.css';

const Programs = (props) => {

    const { categoryPrograms, fetchCategoryPrograms } = useContext(ChannelContext);

    useEffect(() => {
        fetchCategoryPrograms(props.match.params.id);
        console.log("this is in programsP: ", props.match.params.id);
        console.log("this is in programsP: ", categoryPrograms);
    // eslint-disable-next-line
    }, []);

    const renderPrograms = () => {
        return(
            <div className={PStyles.programsPage}>
                {categoryPrograms.map((program, i) => (
                    <div key={i}>
                        <img src={program.programimage} alt={`for channel ${program.name}`}></img>
                        <h2 key={i}>{program.name}</h2>
                        <p>{program.description}</p>
                        {/*Checking if there is a broadcastinfo key, if not rendering div msg */}
                        {program.broadcastinfo
                        ? <div>{program.broadcastinfo}</div>
                        : <div>Det finns just nu ingen sändningstid för detta programmet.</div>
                        }
                    </div>
                ))}
            </div>
        )
    }

    return categoryPrograms ? renderPrograms() : <p>404, Error something went wrong!</p>
}


export default Programs;


