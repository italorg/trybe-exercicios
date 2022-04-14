let algRomano = 'XL';
let soma = 0;
let objeto = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
for(let i in algRomano){
    let a = 0;
    let b = 0;
    a = objeto[algRomano[i]];
    b = objeto[algRomano[i+1]];
    console.log(a,b);
    if(a<b){
        soma -= objeto[algRomano[i]];
    }else{
        soma += objeto[algRomano[i]];
    }
}
console.log(soma);