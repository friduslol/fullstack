import CStyles from "../styles/CategoriesStyles.module.css";
import { useHistory } from "react-router-dom";

function CategoryCard(props) {
    const historyHook = useHistory();

    const clickToRender = () => {
        //using channel name to create new unique route
        historyHook.push(`/category/programs/${props.data.id}`);
    }

    return (
        <div className={CStyles.categoryCard} onClick={clickToRender}>
            <p>{props.data.name}</p>
        </div>
    )
}

export default CategoryCard;