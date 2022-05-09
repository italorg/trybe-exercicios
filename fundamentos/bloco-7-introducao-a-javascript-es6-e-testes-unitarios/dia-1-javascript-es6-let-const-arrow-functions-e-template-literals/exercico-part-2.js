
let fatorial= (n) => {
    if(n > 2){
    let resultado = n;
    for (let i = n-1; i > 0; i --){
        resultado *= i;
    }
    return resultado
    } else {
        return 1
    }
}

console.log(fatorial(4));