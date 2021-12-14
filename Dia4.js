/*¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol,
 que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y,
 a los lados, usamos el guión bajo _ para los espacios. Es muy importante
  que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3: 
__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n 
para cada línea para que se forme bien el árbol.*/

// let cuentaAtras = (numero) => {
//   // base case
//   if (numero === 0) {
//     return console.log("#");
//   }
//   //   console.log("1".repeat(numero) + "*".repeat(numero) + "2".repeat(numero));
//   console.log(
//     "1".repeat(numero * 2 - 1) +
//       "*".repeat(numero * 2 - 1) +
//       "2".repeat(numero * 2 - 1)
//   );
//   //console.log(typeof numero);
//   return cuentaAtras(numero - 1);
// };
// cuentaAtras(3);

// let repetir = 0;
// for (let x = 5; x >= repetir; x--) {
//   console.log("2".repeat(x));
// }

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j < i * 2; j++) {
//     console.log("2".repeat(j));
//   }
// }

const creandoLineas = (altura) => {
  let ancho = "x".repeat(altura * 2 - 1);
  for (let x = 1; x <= altura; x++) {
    let arbol =
      "_".repeat(altura - x) +
      "*".repeat(x) +
      "*".repeat(x - 1) +
      "_".repeat(altura - x);

    console.log(arbol);
  }
  //   for (let y = 1; y <= 2; y++) {
  //     let tronco = "_".repeat(altura + 2);
  //     console.log(tronco + "\n");
  //   }
};
creandoLineas(5);
//(3*2)-1
