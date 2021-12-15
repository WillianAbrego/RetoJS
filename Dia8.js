/*Invertir en criptomonedas es casi un deporte de riesgo.
 El otro día hackearon Bitmart y ha hecho que el valor 
 de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de 
precios de una criptomoneda en un día y debemos devolver
 la ganancia máxima que podríamos sacar si compramos y 
 vendemos la inversión el mismo día.

La lista de precios es un array de números y representa
 el tiempo de izquierda a derecha. Por lo que ten en cuenta 
 que no puedes comprar a un precio que esté a la derecha de 
 la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
Si ese día no se puede sacar ningún beneficio,
 tenemos que devolver -1 para evitar que hagamos una locura:

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible) */
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
//const pricesBtc = [18, 15, 12, 11, 9, 7];
//const pricesBtc = [10, 20, 30, 40, 50, 60, 70];

const ssss = () => {
  let aux = 0;

  for (i = 0; i <= pricesBtc.length; i++) {
    for (let x = 0; x <= pricesBtc.length; x++) {
      let numero1 = pricesBtc[i];
      let numero2 = pricesBtc[x];
      if (numero1 === numero2) {
        continue; //numeros iguales
      }
      if (numero1 === undefined || numero2 === undefined) {
        continue;
      }

      if (numero2 - numero1 <= 0) {
        //console.log("numeros negativos");
        continue;
      }
      if (pricesBtc.indexOf(numero2) <= pricesBtc.indexOf(numero1)) {
        continue;
      }
      let restadenumeros = numero2 - numero1;

      if (restadenumeros >= aux) {
        aux = restadenumeros;
        console.log(aux, numero1, numero2);
      }

      // let arrayenvio = [restadenumeros];
    }
  }
};
ssss();
