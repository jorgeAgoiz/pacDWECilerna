let vegetables = [
  "aguacate.png",
  "ajo.png",
  "cebolla.png",
  "pepino.png",
  "puerro.png",
  "tomate.png",
  "zanahoria.png",
];

//********* Elementos del DOM ************
const container = document.querySelector(".container");
// Botones
const coins = document.getElementById("coins");
const insert = document.getElementById("insertCoin");
// Marcador
const showCoins = document.querySelector(".showCoin");
// Vegetales tirada
const figOne = document.querySelector(".figOne");
const figTwo = document.querySelector(".figTwo");
const figThree = document.querySelector(".figThree");
const figsArray = [figOne, figTwo, figThree];
let vegOne = document.createElement("img");
let vegTwo = document.createElement("img");
let vegThree = document.createElement("img");
const vegsArray = [vegOne, vegTwo, vegThree];

// Saldo
let cash = 0;
let loading = true; // Spinner de carga

/****** Funcionalidades Botones  ******/

// Boton insertar dinero
const printCoins = () => {
  if (coins.value > 0) {
    cash = parseInt(coins.value);
    showCoins.innerHTML = `<h1>${cash}</h1>`;
    insert.disabled = true;
    coins.value = 0;
  } else {
    alert("introduzca una cantidad valida.");
  }
};

//Boton tirar
const play = () => {
  if (cash > 0) {
    --cash;
    showCoins.innerHTML = "";
    showCoins.innerHTML = `<h1>${cash}</h1>`;
    const result = showVegetables();
    insertVegetables(result);
  } else {
    alert("No dispone de saldo, inserte mas monedas.");
  }
  console.log(cash);
  /* Implementar el mecanismo para mostrar las verduras y los premios relacionados */
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
//Funcion para realizar la tirada
const insertVegetables = (vegetables) => {
  for (let x = 0; x < vegetables.length; x++) {
    vegsArray[x].src = `./img/${vegetables[x]}`;
    figsArray[x].appendChild(vegsArray[x]);
  }
  cash === 0 ? (insert.disabled = false) : (insert.disabled = true);
};
