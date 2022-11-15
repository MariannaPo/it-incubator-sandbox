function isPalindrome(x) {
    let xUp = x.toUpperCase();
    let splitX = xUp.split('');
    let reverseX = splitX.reverse();
    let joinX = reverseX.join('');
    let joinXUp = joinX.toUpperCase();
    return (xUp === joinXUp) ? true : false;
}