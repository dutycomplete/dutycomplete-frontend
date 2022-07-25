function Duty(props) {
    const setStatus = function () {
        props.setStatus(props.info.id, props.status + 1);
    };

    return (
        <div>
            <p>{props.info.name}</p>
            <p>{props.status}</p>
            <button onClick={setStatus}>+1</button>
        </div>
    );
}

export default Duty;
