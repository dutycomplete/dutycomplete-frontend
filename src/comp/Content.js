import Categories from './Categories';
import Duties from './Duties';
import Filters from './Filters';

const dutyInfo = [
    {
        id: 0,
        name: 'Test 0',
    },
    {
        id: 1,
        name: 'Test 1',
    },
];

function Content() {
    return (
        <main>
            <Categories />
            <Duties info={dutyInfo} />
            <Filters />
        </main>
    );
}

export default Content;
