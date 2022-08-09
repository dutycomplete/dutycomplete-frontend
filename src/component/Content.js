import { useEffect, useState } from 'react';
import Categories from './Categories';
import Duties from './Duties';
import Filters from './Filters';

function Content() {

    const [activeCategory, setActiveCategory] = useState(0);

    const [dutyData, setDutyData] = useState([]);

    useEffect(() => {
        fetch("https://dutycomplete.s3.amazonaws.com/data/duties.json")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(data => {
                setDutyData(data.sort((a, b) => a.sort - b.sort));
            });
    }, []);

    return (
        <>
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Duties info={dutyData.filter(duty => duty.category === activeCategory)} />
            {/*<Filters />*/}
        </>
    );
}

export default Content;
