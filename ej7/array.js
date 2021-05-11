
let numero =27

function crearArray(numero){
    let array =[]
    for(let i =numero +1; i<=numero +10; i++){
        array.push(i)
    }
    return array
}




module.exports =crearArray;

/*function crearArray(num) {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array[i] = num++;
    }
    console.log(array);
  }
  
  module.exports = crearArray;*/

