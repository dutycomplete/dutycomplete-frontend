function DutyStatus(props) {

    const handleClick = () => {
        props.setStatus(parseInt(props.value));
    };

    const className = `duty-status-button ${props.status === parseInt(props.value) && "duty-status-button-selected"}`;

    return (
        <button className={className} style={{gridColumn: parseInt(props.value) + 1}} onClick={handleClick}>{props.text}</button>
    );
}

export default DutyStatus;
