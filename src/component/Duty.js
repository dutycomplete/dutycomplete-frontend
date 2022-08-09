import DutyStatus from "./DutyStatus";

const imgEndpoint = "https://dutycomplete.s3.amazonaws.com/duty/";

function Duty(props) {

    let className = "duty ";
    if (props.status === 0) {
        className += "duty-incomplete";
    } else if (props.status === 1) {
        className += "duty-unsynced";
    } else if (props.status === 2 && props.info.allowsMINE) {
        className += "duty-synced";
    } else {
        className += "duty-complete";
    }

    const imgSrc = `${imgEndpoint}${props.info.icon}.png`;

    return (
        <div className={className}>
            <img className="duty-icon" src={imgSrc} alt="" />
            <p className="duty-name">{props.info.name}</p>
            <div className="duty-status-container">
                <DutyStatus text="Incomplete" value="0" status={props.status} setStatus={props.setStatus} />
                {props.info.allowsUndersized &&
                    <DutyStatus text="Unsynced" value="1" status={props.status} setStatus={props.setStatus} />
                }
                <DutyStatus text="Synced" value="2" status={props.status} setStatus={props.setStatus} />
                {props.info.allowsMINE &&
                    <DutyStatus text="MINE" value="3" status={props.status} setStatus={props.setStatus} />
                }
            </div>
        </div>
    );
}

export default Duty;
