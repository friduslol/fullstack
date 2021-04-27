import CStyles from "../styles/CategoriesStyles.module.css";

function CategoryCard(props) {
    return (
        <div className={CStyles.categoryCard}>
            <p>{props.data.name}</p>
        </div>
    )
}

export default CategoryCard;