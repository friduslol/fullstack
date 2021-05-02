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
               <h1>ProgramLista</h1>

                {categoryPrograms.map((program, i) => (
                    <div key={i} className={PStyles.programsWrapper}>
                        <div className={PStyles.imgWrapper}>
                            <img className={PStyles.programImg} src={program.programimage} alt={`for channel ${program.name}`}></img>
                        </div>
                        <h2>{program.name}</h2>
                        <p>{program.description}</p>
                        {/*Checking if there is a broadcastinfo key, if not rendering div msg */}
                        {program.broadcastinfo
                        ? <p>{program.broadcastinfo}</p>
                        : <p>Det finns just nu ingen sändningstid för detta programmet.</p>
                        }
                    </div>
                ))}
            </div>
        )
    }

    return categoryPrograms ? renderPrograms() : <p>loading...</p>
}


export default Programs;


