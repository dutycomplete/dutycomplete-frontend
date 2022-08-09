import { useEffect, useState } from "react";
import CategoriesTab from "./CategoriesTab";

function Categories(props) {
    
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        fetch("https://dutycomplete.s3.amazonaws.com/data/categories.json")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(data => {
                setCategoryData(data);
            });
    }, []);

    const tabs = categoryData && categoryData.map(category => {
        const active = props.activeCategory === category.id;
        const setActiveTab = () => props.setActiveCategory(category.id);

        return (
            <CategoriesTab key={category.id} data={category} active={active} setActiveTab={setActiveTab} />
        );
    });

    return (
        <div id="categories" className="clamp-container">
            <div className="categories-margin"></div>
            <div id="categories-content" className="clamp-content">
                {tabs}
            </div>
            <div className="categories-margin"></div>
        </div>
    );
}

export default Categories;
