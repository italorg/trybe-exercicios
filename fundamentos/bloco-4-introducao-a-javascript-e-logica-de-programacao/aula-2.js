let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i = 0; i<groceryList.length; i+=1){
    console.log(groceryList[i]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names){
    console.log(name);
}

//exercicio 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

//exercicio 02

let soma = 0;
for(let i=0; i<numbers.length; i+=1){
    soma += numbers[i];
}
console.log(soma);

//exercicio 03

let media = soma/numbers.length;
console.log(media);

//exercicio 04

if(media>20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

//exercicio 05

let maiorNumber = 0;
for(let i=0; i<numbers.length; i+=1){
    if(numbers[i] > maiorNumber){
        maiorNumber = numbers[i];
    }
}
console.log(maiorNumber);

//exercicio 06

let numberOfImpares = 0;
let impares = [];
for(let i = 0; i<numbers.length; i+=1){
    if(numbers[i]%2===1 || numbers[i]===1){
        impares.push(numbers[i]);
        numberOfImpares+=1;
    }
}
console.log('Número de impares: ' + numberOfImpares + ';' + ' Que são: ' + impares);

//exercicio 07

let menorNumber = numbers[0];
for(let i=1; i<numbers.length; i+=1){
    if(numbers[i] < menorNumber){
        menorNumber = numbers[i];
    }
}
console.log(menorNumber);

//exercicio 08

let array = []

for(let i = 1; i<26; i+=1){
    array.push(i);
}
console.log(array);

//exercicio 09

let divisao = 0;
for(let i = 0; i<25; i+=1){
    divisao = array[i]/2;
    console.log(divisao);
}
