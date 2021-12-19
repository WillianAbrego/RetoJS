/*¡Hay demasiados regalos 🎁! Y envolverlos es una locura...
Vamos a crear una función que pasándole un array de regalos,
 nos devuelva otro array pero donde todos los regalos han 
 sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a 
la hora de contar su longitud...
Por suerte, cada posición del array siempre
tiene la misma longitud... */

//wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

//wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

//wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
// */
// console.log(["📷", "⚽️"]);
// console.log(["🏈🎸", "🎮🧸"]);
// console.log(["📷"]);

// const wrapGifts = (regalo) => {
//   console.log(regalo);
// };
// wrapGifts(["📷"]);
// wrapGifts(["🏈🎸", "🎮🧸"]);
// wrapGifts(["📷", "⚽️"]);
const wrapGifts = (regalo) => {
  for (let y = 0; y <= 0; y++) {
    let lineaf =
      "*".repeat(1) + "*".repeat(y + regalo.length * 2) + "*".repeat(1);
    console.log(lineaf);
  }
  for (let x = 0; x <= regalo.length; x++) {
    let regalos = "*".repeat(1) + regalo[x] + "*".repeat(1);
    if (regalo[x] === undefined) {
      for (let y = 0; y <= 0; y++) {
        let lineaf =
          "*".repeat(1) + "*".repeat(y + regalo.length * 2) + "*".repeat(1);
        return console.log(lineaf);
      }
    }

    console.log(regalos);
  }
};

//wrapGifts(["📷"]);
wrapGifts(["🏈🎸", "🎮🧸"]);
//wrapGifts(["📷", "⚽️"]);
