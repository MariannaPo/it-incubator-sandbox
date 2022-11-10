// type gooseFilterPropsType = {
//     birdsArray: Array<{
//         name: string, status: string
//     }>,
//     noGeese: () => void;
// }
//
// function gooseFilter(props: gooseFilterPropsType) {
//     const birdsArray = [
//         {name: 'Mallard', stat: 'no'},
//         {name: 'Hook Bill', stat: 'no'},
//         {name: 'African', stat: 'geese'},
//         {name: 'Roman Tufted', stat: 'geese'},
//         {name: 'Toulouse', stat: 'geese'},
//         {name: 'Pilgrim', stat: 'geese'},
//         {name: 'Steinbacher', stat: 'geese'},
//         {name: 'Blue Swedish', stat: 'no'},
//         {name: 'Barbary', stat: 'no'},
//         {name: 'Creasted', stat: 'no'}
//     ];
//     let noGeese = () => {
//         if (birdsArray['stat'] === 'geese') {
//             return birdsArray['name'];
//         }
//
//     }
//     return props.birdsArray.filter(g => {noGeese});
// };
//
//
//


type gooseFilterPropsType = {
    birdsArray: Array<{
        name: string, status: string
    }>,
    noGeese: () => void;
}

function gooseFilter(props: gooseFilterPropsType) {
    const birdsArray = [
        {name: 'Mallard', stat: 'no'},
        {name: 'Hook Bill', stat: 'no'},
        {name: 'African', stat: 'geese'},
        {name: 'Roman Tufted', stat: 'geese'},
        {name: 'Toulouse', stat: 'geese'},
        {name: 'Pilgrim', stat: 'geese'},
        {name: 'Steinbacher', stat: 'geese'},
        {name: 'Blue Swedish', stat: 'no'},
        {name: 'Barbary', stat: 'no'},
        {name: 'Creasted', stat: 'no'}
    ];
    let noGeese = (props: gooseFilterPropsType) => {
        if (birdsArray['stat'] === 'geese') {
            return birdsArray['name'];
        }
    }
    return props.birdsArray.filter(g => {noGeese});
};
