//Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  return arrays.reduce((acc, cur) => {
    cur.forEach(element => acc.push(element));
    return acc;
  }, []);
}

console.log(flatten(arrays));

