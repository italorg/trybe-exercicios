const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
let newArray; 
newArray = products.map((element, index)=>{
  return {[element]: prices[index]}
});
console.log(newArray);