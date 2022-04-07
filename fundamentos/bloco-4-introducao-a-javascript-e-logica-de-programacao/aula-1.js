const a = 10;
const b = 20;
const c = 30;
const d=-1;

//exercicio 1:

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//exercicio 2:

if(a>b){
  console.log(a);
}else if(a<b){
  console.log(b);
}else if(a===b){
  console.log("a e b são iguais");
}else{
  console.log("numeros invalidos");
}

//exercicio 3:

if(a>b && a>c){
  console.log(a);
}else if(b>c){
  console.log(b);
}else if(c>b){
  console.log(c);
}else if(a===b && a===c){
  console.log("todos iguais");
}else {
  console.log("numeros invalidos");
}

//exercicio 4:

if(d>0){
  console.log("positive");
}else if(d<0){
  console.log("negative");
}else {
  console.log("zero");
}

//exercicio 5:

const angA = -30;
const angB = 60;
const angC = 90;
let soma = 0;

soma = angA + angB + angC;
if(angA>0&&angB>0&&angC>0){
  console.log(soma===180);
}else{
  console.log("angulo invalido");
}

//exercicio 8

/* Não sei xadrez nem quero aprender agora*/

//exercico 7

let nota = 100;

if(nota>100||nota<0){
  console.log("Nota invalida");
}else if(nota>=90){
  console.log("A");
}else if(nota>=80){
  console.log("B");
}else if(nota>=70){
  console.log("C");
}else if(nota>=60){
  console.log("D");
}else if(nota>=50){
  console.log("E");
}else {
  console.log("F");
}

//exercicio 8

const n1 = 2
const n2 = 3
const n3 = 5

if(n1%2===0||n2%2===0||n3%2===0){
  console.log(true);
}else{
  console.log(false);
}

//exercicio 9

const n4 = 2
const n5 = 2
const n6 = 6

if(n4%2===0&&n5%2===0&&n6%2===0){
  console.log(false);
}else{
  console.log(true);
}

//exercicio 10

const valorCusto = 15;
const valorVenda = 25;

if(valorCusto<0||valorVenda<0){
  console.log("Valor Invalido");
}else{
  console.log((valorVenda-(valorCusto*1.2))*1000);
}

//exercicio 11

let salario = 3000;

if(salario < 1556.95){

  salario = salario * 0.92

}else if(salario < 2594.93){

  salario = salario * 0.91

}else if(salario < 5189.82){

  salario = salario * 0.89

}else{

  salario = salario - 570.88

}

if(salario < 1903.99){

  console.log(salario);

}else if(salario < 2826.66){

  console.log(salario - ((salario * 0.075) - 142.8));

}else if(salario<3751.06){

  console.log(salario - ((salario * 0.15) - 354.8));

}else if(salario<4664.69){
  
  console.log(salario - ((salario * 0.225) - 636.13));

}else{

  console.log(salario - ((salario * 0.275) - 869.36));

}