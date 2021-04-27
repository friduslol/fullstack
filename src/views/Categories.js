import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useEffect } from "react";
import CStyles from "../styles/CategoriesStyles.module.css";
import CategoriesWrapper from "../components/CategoriesWrapper"

const Categories = () => {
    const { fetchCategories } = useContext(ChannelContext);

    useEffect(() => {
        fetchCategories();
    }, [])

    return(
        <div className={CStyles.categoriesPage}>
            <h1>Katagorier</h1>
            <CategoriesWrapper />
        </div>
    )
}

export default Categories;