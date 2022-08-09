const imgEndpoint = "https://dutycomplete.s3.amazonaws.com/category/";

function CategoriesTab(props) {

    const className = `categories-tab ${props.active && "categories-tab-active"}`;
    const imgSrc = `${imgEndpoint}${String(props.data.icon).padStart(6, "0")}.png`;

    return (
        <button className={className} onClick={props.setActiveTab}>
            <img src={imgSrc} alt={props.data.name} title={props.data.name} />
        </button>
    );
}

export default CategoriesTab;
