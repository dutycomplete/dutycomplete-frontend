import { useState } from 'react';
import Duty from './Duty';

const prevDutyStatusesItem = localStorage.getItem("dutystatuses");
const prevDutyStatuses = prevDutyStatusesItem ? JSON.parse(prevDutyStatusesItem) : [];

function Duties(props) {
    const [dutyStatuses, setDutyStatuses] = useState(prevDutyStatuses);

    const setDutyStatus = function (id, status) {
        const newDutyStatuses = dutyStatuses
            .filter(dutyStatus => dutyStatus.id !== id)
            .concat({ id, status });
        setDutyStatuses(newDutyStatuses);
        localStorage.setItem("dutystatuses", JSON.stringify(newDutyStatuses));
    };

    const dutyElements = props.info.map(dutyInfo => {
        const dutyStatus = dutyStatuses.find(dutyStatus => dutyStatus.id === dutyInfo.id);
        const status = dutyStatus ? dutyStatus.status : 0;
        return <Duty key={dutyInfo.id} info={dutyInfo} status={status} setStatus={setDutyStatus} />
    });

    return (
        <div id="duties">
            {dutyElements}
        </div>
    );
}

export default Duties;
