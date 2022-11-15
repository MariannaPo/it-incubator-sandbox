function evenOrOdd(number) {
    if (!Number.isInteger(number)){
        return number;
    }
    if (number % 2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}


function evenOrOdd(number) {
    if (!Number.isInteger(number)){
        return number;
    }
    return (number % 2 === 0) ? 'Even' : 'Odd';
}
