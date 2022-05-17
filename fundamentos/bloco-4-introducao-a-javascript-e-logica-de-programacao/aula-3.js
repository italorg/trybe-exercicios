//exercicio 1

/*

let fatorial = 10;
for(let i = fatorial-1; i>0; i--){
    fatorial = fatorial * i
}
console.log(fatorial);

*/

//exercicio 2

/*

let word = 'tryber';
let newword = '';

for(let i = word.length-1; i >=0; i-=1){
    newword = newword + word[i];
}
console.log(newword);

*/

//exercicio 3.a

/*

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = '';

for(let i = 0; i < array.length; i+=1){
    if(array[i].length > palavra.length){
        palavra = array[i]
    }
}
console.log(palavra);

*/

//exercicio 3.b

/*

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = '';

palavra = array[0]

for(let i = 1; i < array.length; i+=1){
    if(array[i].length < palavra.length){
        palavra = array[i]
    }
}
console.log(palavra);

*/

//exercicio 4

/*

let quantidadeDeDivisores = 0;
let restoDaDivisao = 0;

for(let dividendo = 49; dividendo > 0; dividendo--){
    quantidadeDeDivisores = 0;
    for(let divisor = dividendo-1; divisor > 1; divisor--){
        
        restoDaDivisao=dividendo%divisor;

        if(restoDaDivisao === 0){
            quantidadeDeDivisores++;
        }
    }
    if(quantidadeDeDivisores===0){
        console.log(dividendo);
        break;
    }
}

*/

