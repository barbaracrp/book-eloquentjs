function range(start, end, step = 1) {
  const list= [];
  if (start <= end && step >= 1) {
    for (let i = start; i <= end; i += step) {
      list.push(i);
    }
  } else if(step < 0) {
    for (let i = start; i >= end; i += step) {
      list.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= step) {
      list.push(i);
    }
  }
  return list;
}

console.log(range(10, 0, 1));
console.log(range(10, 0, -1));
console.log(range(0, 10, 1));
console.log(range(0, 10, -1));

function sum(list){
  let sum = 0;
  for (const i of list) {
    sum += i;
  }
  return sum;
}
console.log(sum(range(1, 10, -1)));
console.log(sum(range(10, 1)));
