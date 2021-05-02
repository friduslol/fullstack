import { ChannelContext } from "../contexts/ChannelContext";
import { useContext, useEffect } from "react";
import CStyles from "../styles/CategoriesStyles.module.css";
import CategoriesWrapper from "../components/CategoriesWrapper"

const Categories = () => {
    const { fetchCategories } = useContext(ChannelContext);

    useEffect(() => {
        fetchCategories();
    // eslint-disable-next-line
    }, [])

    return(
        <div className={CStyles.categoriesPage}>
            <CategoriesWrapper />
        </div>
    )
}

export default Categories;