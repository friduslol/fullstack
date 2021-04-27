import { ChannelContext } from "../contexts/ChannelContext";
import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import CStyles from "../styles/CategoriesStyles.module.css";

function CategoriesWrapper() {
    const { categories } = useContext(ChannelContext);

    return (
        <div className={CStyles.categoriesWrapper}>
                <h1 className={CStyles.categoriesHeader}>Klicka på en kategori för att komma till dess programlista.</h1>
            {categories.map((category, i) => (
                <CategoryCard key={i} data={category} />
            ))}
            {}
        </div>
    )
}

export default CategoriesWrapper;