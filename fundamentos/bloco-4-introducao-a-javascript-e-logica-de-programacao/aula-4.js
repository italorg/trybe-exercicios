
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


//parte I - 01


console.log('Bem-vinda,',info.personagem);


//parte I - 02


info.recorrente = 'Sim';
console.log(info);


//parte I - 03


for(let key in info){
    console.log(key);
}


//parte I - 04


for(let key in info){
    console.log(info[key]);
}


//parte I - 05


let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for(key in info, info2){

    if(info[key]!=info2[key]){
        console.log(info[key],'e',info2[key]);
    }else{
        console.log('Ambos recorrentes');
    }
}



let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        },
    ],
  };

//parte I - 06

console.log("O livro favorito de "+leitor.nome+' '+leitor.sobrenome+" se chama '"+leitor.livrosFavoritos[0].titulo+"'");

//parte I - 07

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

//parte I - 08  

console.log("Julia tem "+leitor.livrosFavoritos.length+" livros favoritos");


//parte II - 01


function verificaPalindrome(word) {
    let word2 = [];
    word2 = word.split('');      
    word2 = word2.reverse('')     
    if(word === word2.join('') ){
        return true;
    }else {
        return false;
    }
}
console.log(verificaPalindrome('arara')); // retorno: true


//parte II - 02


function indiceDoMenorValor(array) {
    let maior = array[0];
    let indice = 0;
    for(key in array){
        if(array[key] > maior){
            maior = array[key];
            indice = key
        }
    }
    return indice;
}
console.log(indiceDoMenorValor([2, 3, 6, 7, 10, 1])); // retorno: 4


//parte II - 03


function indiceDoMenorValor(array) {
    let menor = array[0];
    let indice = 0;
    for(key in array){
        if(array[key] < menor){
            menor = array[key];
            indice = key
        }
    }
    return indice;
}
console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3])); // retorno: 6


//parte II - 04


function maiorNome(array){
    nomeMaior = array[0];
    for(key in array){
        if(array[key].length > nomeMaior.length){
            nomeMaior = array[key];
        }
    }
    return nomeMaior;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // retorno: Fernanda


//parte II - 05


function maisRepete(array){
    let contador1 = 0;
    let contador2 = 0;
    let valorQueRepeteMais = 0;
    for(a of array){
        contador1=0;
        for(b of array){
            if(a===b){
                contador1 += 1;
            }
        }
        if(contador1>contador2){
            contador2=contador1;
            valorQueRepeteMais = a
        }
    }
    return valorQueRepeteMais;
}
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));


//parte II - 06


function somatorio(N) {
    let soma = 0;
    for(let i = N; i > 0; i -= 1){
        soma += i
    }
    return soma;
}
console.log(somatorio(5));


//parte II - 07


function oFinal(word, ending){
    
    let palavra = word.split('');
    let final = [];
    for(let i = word.length-1; i >= word.length-ending.length; i -= 1){
        final.push(word[i])
    }
    final = final.reverse('')
    if (final.join('') === ending){
        return true;
    }else{
        return false;
    }
}
console.log(oFinal('trybe', 'be'));



