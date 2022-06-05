/*
function sumarLosTres(num1, num2, num3) {
    return num1 + num2 + num3
   }
   
   function cuadrado(num) {
    return num * num
   }
   
   function decirHola() {
    console.log('¡Hola!');
   }
*/
let sumarLosTres = (num1, num2, num3) => num1+num2+num3

let cuadrado = num => num*num

let decirHola = () => console.log("HOLA!")

/*
function saludar (nombre) {
 if (nombre === undefined) {
   return "hola anónimo";
 } else {
   return "hola " + nombre;
 }
}
*/

let saludar = nombre => {
    if (nombre === undefined) {
        return "hola anónimo";
      } else {
        return "hola " + nombre;
      }
}

let nombreCompleto = nombre, apellido => {
    return `${nombre} ${apellido}`;
   }

let exclamar = str => {
    `str`
   }
   
let mayusculas = (str) => return str.toUpperCase()

let minusculas = (str) => str.toLowerCase()