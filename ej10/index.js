
let recibirNumeros =require("./funcion")
 let array =[]
function arrayNumeros() {
    for(let i=4;i>=1; i--){
        array.push(i)
    }
    return array
}
//console.log(arrayNumeros())
array =[arrayNumeros(),recibirNumeros()] //no se si era exactamente esto lo que pedia el ejercicio
console.log(array)