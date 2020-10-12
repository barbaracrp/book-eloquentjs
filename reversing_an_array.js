const array = [1, 2, 3 ,4];
function reverseArray(array) {
  const newArray = [];
  for(let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
reverseArray(array);

console.log(reverseArray(array));
