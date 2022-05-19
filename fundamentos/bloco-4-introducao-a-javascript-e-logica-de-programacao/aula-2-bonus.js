//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// bonus 1
/*
for (let i1 = 1; i1 < numbers.length; i1 += 1) {

    for (let i2 = 0; i2 < i1; i2 += 1) 
    {
      if (numbers[i1] < numbers[i2]) {

        let aux = numbers[i1];

        numbers[i1] = numbers[i2];
        
        numbers[i2] = aux;

      }
    }
  }
  console.log(numbers);

  //bonus 2

  for (let i1 = 1; i1 < numbers.length; i1 += 1) {

    for (let i2 = 0; i2 < i1; i2 += 1) 
    {
      if (numbers[i1] > numbers[i2]) {

        let aux = numbers[i1];

        numbers[i1] = numbers[i2];
        
        numbers[i2] = aux;

      }
    }
  }
  console.log(numbers);
*/
  //bonus 3

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let numbers2 = [];

  for (let i = 0; i < numbers.length; i += 1) {

    if(i==numbers.length-1){

      numbers2.push(numbers[i]*2);

    }else{

      numbers2.push(numbers[i]*numbers[i+1])

    }

  }
  console.log(numbers2);