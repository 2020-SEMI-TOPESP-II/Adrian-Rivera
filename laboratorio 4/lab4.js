var a = 23;
var b = 15;
var suma = a+b;
var resta = a-b;
var multi = a*b;
var div = a/b;
let uno = 'Topicos';
let dos = ' Especiales';
const cadena = 'HOLA MUNDO';
const real = 5.1;
console.log('el valor de a es ' + a + ' y el valor de b es ' + b);
console.log('la suma de a y b es ' + suma);
console.log('la resta de a y b es ' + resta);
console.log('la multipliacion de a y b es ' + multi);
console.log('la division de a y b es ' + div);
console.log('');
console.log('la concatenacion de las variables let es : ' + uno + dos);
console.log('');
console.log('la primera constante ' + cadena +  ' es: ' + typeof cadena);
console.log('la segunda constante ' + real +  ' es: ' + typeof real);
console.log('');
var bool;
var Juan = {
  apellido: "Sanjur",
  edad: 28,
  casado: true,
  direc: {}
};
if (Juan.casado == true) {
   var bool = 'esta casado';
} else {
   var bool = 'no esta casado';
}
console.log('Juan ' + Juan.apellido + ' tiene ' + Juan.edad + ' años, ' + bool + ' y su direccion es' + Juan.direc);