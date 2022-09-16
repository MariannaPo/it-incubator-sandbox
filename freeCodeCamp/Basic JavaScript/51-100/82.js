let count = 0;

function cc(card) {
    let zero = 7 | 8 | 9;
    let mOne = 10 | 'J' | 'Q' | 'К' | 'А';
    if (card === 2 | 3 | 4 | 5 | 6) {
        count += 1;
    } else if (card === zero) {
        count += 0;
    } else if (card === mOne) {
        count -= 1;
    } else if (count > 0) {
        return 'Bet';
    } else if (count < 0) {
        return 'Hold';
    }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

let count = 0;

function cc(card) {
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count +=1;
        case 7:
        case 8:
        case 9:
            count -=1;
        case 10:
        case "j":
        case "Q":
        case "K":
        case "A":
            count +=0;
        case count > 0:
            console.log(count +" Bet");
            break;
        default:
        case count < 0:
            console.log(count +" Hold");
            break;
    }
}