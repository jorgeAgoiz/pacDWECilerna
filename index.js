let vegetables = [
  "aguacate.png",
  "ajo.png",
  "cebolla.png",
  "pepino.png",
  "puerro.png",
  "tomate.png",
  "zanahoria.png",
];

// Elementos del DOM
const container = document.querySelector(".container");
const coins = document.getElementById("coins");
const insert = document.getElementById("insertCoin");
const showCoins = document.querySelector(".showCoin");
let cash = 0;

/****** Funcionalidades Botones  ******/

// Boton insertar dinero
const printCoins = () => {
  cash = parseInt(coins.value);
  showCoins.innerHTML = `<h1>${cash}</h1>`;
  insert.disabled = true;
  coins.value = 0;
};

//Boton tirar
const play = () => {
  if (cash > 0) {
    --cash;
    showCoins.innerHTML = "";
    showCoins.innerHTML = `<h1>${cash}</h1>`;
  }
  cash == 0 ? (insert.disabled = false) : (insert.disabled = true);
  /* Implementar el mecanismo para mostrar las verduras y los premios relacionados */
  const result = showVegetables();
  console.log(result);
};

//Boton salir
const exit = () => {
  container.remove();
  let goodbye = document.createElement("div");
  alert(`Estas seguro de abandonar la partida? Tu saldo es: ${cash}`);
  goodbye.innerHTML = `
                        <h1>Gracias por Jugar!!!</h1>
                        <br>
                        <button onclick="window.location.reload();">Volver a Jugar</button>
                    `;
  document.body.appendChild(goodbye);
};

//Funcion para mostrar la tirada
const showVegetables = () => {
  const results = [];
  for (let x = 0; x < 3; x++) {
    let shot = Math.round(Math.random() * 6);
    results.push(vegetables[shot]);
  }
  return results;
};
