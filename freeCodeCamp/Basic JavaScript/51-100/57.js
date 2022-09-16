function nextInLine(arr, item) {
    arr.push(item);
    let del = arr.shift();
    return del;
}
