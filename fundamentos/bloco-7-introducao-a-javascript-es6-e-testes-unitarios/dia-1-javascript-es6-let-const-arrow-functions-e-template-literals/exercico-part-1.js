
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      return console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } 
    return 'Não devo ser utilizada fora meu escopo (else)';
  }

  testingScope(true);
  






const oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (j in oddsAndEvens) {
  for (i in oddsAndEvens) {
    let aux = 0;
    if (oddsAndEvens[j] < oddsAndEvens[i]) {
      aux = oddsAndEvens[i];
      oddsAndEvens[i] = oddsAndEvens[j];
      oddsAndEvens[j] = aux;
    }
  }
}

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 