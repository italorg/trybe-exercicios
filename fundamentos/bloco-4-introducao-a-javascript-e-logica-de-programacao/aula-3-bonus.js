//bonus 01

/*

let n = 5;
let linha = '';

for(let i = 0; i < n; i+=1){
    linha += '*'
}
for(let i = 0; i < n; i+=1){
    console.log(linha);
}

*/

//bonus 02

/*

let n = 5;
let ast = '';

for(let i = 1; i <= n; i += 1){
    ast = '';
    for(let j = 0; j < i; j += 1){
        ast += '*'
    }
    console.log(ast);
}

*/

//bonus 03

/*

let n = 5;
let ast = '';

for(let i = 1; i <= n; i += 1){
    ast = '';
    for(let k = 0; k < n-i; k += 1){
        ast += ' ';
    }
    for(let j = 0; j < i; j += 1){
        ast += '*'
    }
    console.log(ast);
}

*/

//bonus 05



let n = 5;
let linha = '';
let aux = (n+1/2)


for(let i = 1; i <= aux; i ++){
    linha = '';
    
    for(let j = aux-i; j > 0 ; j --){
        linha += ' ';
    }
    
    for(let k = 0; k < k+i; k ++){
        linha += '*';
    }
    
    for(let k = aux-i; k > 0 ; k --){
        linha += ' ';
    }
    
    console.log(linha);
}


