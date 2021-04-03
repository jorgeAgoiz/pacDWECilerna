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
const coins = document.getElementById("coins");
const insert = document.getElementById("insertCoin");
const showCoins = document.querySelector(".showCoin");
let cash = 0;

/****** Funcionalidades Botones  ******/

// Boton insertar dinero
const printCoins = () => {
  cash = parseInt(coins.value);
  console.log(typeof cash);
  showCoins.innerHTML = `<h1>${cash}</h1>`;
  insert.disabled = true;
};

//Boton tirar
const play = () => {
  cash--;
  showCoins.innerHTML = "";
  showCoins.innerHTML = `<h1>${cash}</h1>`;
};
