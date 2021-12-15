/*Antes de poder disfrutar de la navidad... nos toca terminar 
de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱
A una función se le pasan dos parámetros: un Array con números
y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el 
resultado esperado. Como a veces pueden haber más de dos valores
que sumen, se devolverá el primero empezando por la izquierda
que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.

Veamos unos ejemplos:

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 5, 3, 1], 4); // [3, 1]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
El resultado tiene que ser un array con dos números.

Una vez que tengas el resultado... ¿cómo podrías hacer que 
fuese lo más óptimo posible para no tener que recorrer 
las mismas situaciones dos veces 🤔? */

const sumPairs = (numeros, resultado) => {
  for (let x = 0; x < numeros.length; x++) {
    for (let y = 1; y < numeros.length; y++) {
      if (numeros[x] + numeros[y] == resultado) {
        let numero1 = numeros[x];
        let numero2 = numeros[y];

        if (numero1 === numero2 && numero1 + numero2 == resultado) {
          //   let arrayenvio = [numero1, numero2];
          continue;
        }

        let arrayenvio = [numero1, numero2];

        return console.log(arrayenvio);
      }
    }
  }
  return console.log("null");
};

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 5, 3, 1], 4); // [3, 1]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
