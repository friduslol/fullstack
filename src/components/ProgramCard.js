import PCStyles from "../styles/ProgramCardStyles.module.css"
import React, { useContext, useState } from 'react';
import { UserContext } from "../contexts/UserContext"

function ProgramCard(props) {
    const { loggedinUser } = useContext(UserContext);

    const [userId, setUserId] = useState("");
    const [programId, setprogramId] = useState("");
    const [programName, setprogramName] = useState("");

    const handleSave = () => {
        setUserId(loggedinUser.id);
        setprogramId(props.data.id);
        setprogramName(props.data.name);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let favProgram = {
            userId,
            programId,
            programName
        };

        if(favProgram.userId) {
            let result = favProgram;
            console.log(result);
        } else {
            console.log("oupsi could not save program");
        }
    }

    return (
        <div className={PCStyles.programCard}>
            <p>{props.data.name}</p>
            {loggedinUser ? (
                    <div onSubmit={handleSubmit}>
                        <form>
                            <button type="submit" onClick={handleSave}>SPARA Program</button>
                        </form>
                    </div>
                ) : <div></div>}
        </div>
    )
}

export default ProgramCard;