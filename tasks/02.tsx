var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка', 'Огурец'];
function arrayClone(arr) {
  let a = arr.slice();
  return a;
}

let b = arrayClone(vegetables);

console.log(b)