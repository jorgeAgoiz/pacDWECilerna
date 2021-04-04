let vegetables = [
  "aguacate.png", // 0
  "ajo.png", // 1
  "cebolla.png", // 2
  "pepino.png", // 3
  "puerro.png", // 4
  "tomate.png", // 5
  "zanahoria.png", // 6
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
const history = document.createElement("ul");
const historial = document.querySelector(".historial");
historial.appendChild(history);

// Saldo
let cash = 0;

/****** Funcionalidades Botones  ******/

// Boton insertar dinero
const printCoins = () => {
  if (coins.value > 0) {
    cash = parseInt(coins.value);
    showCoins.innerHTML = `<h1>${cash} $</h1>`;
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
    let oldCash = cash;
    showCoins.innerHTML = "";
    showCoins.innerHTML = `<h1>${cash} $</h1>`;
    const { results, numbers } = showVegetables();
    const prize = checkPrize(numbers);
    if (prize) {
      cash = cash + prize;
      showCoins.innerHTML = "";
      showCoins.innerHTML = `<h1>${cash} $</h1>`;
    }
    insertVegetables(results);
    showHistory(prize, oldCash);
  } else {
    alert("No dispone de saldo, inserte mas monedas.");
  }
  /* Implementar el mecanismo para mostrar las verduras y los premios relacionados */
};

//Boton salir
const exit = () => {
  container.remove();
  let goodbye = document.createElement("div");
  goodbye.style.textAlign = "center";
  alert(`Abandona la partida. Tu saldo es: ${cash}`);
  goodbye.innerHTML = `
                        <h1>Gracias por Jugar!!!</h1>
                        <br>
                        <button class="play-again" onclick="window.location.reload();">Volver a Jugar</button>
                    `;
  document.body.appendChild(goodbye);
};

//Funcion para mostrar la tirada
const showVegetables = () => {
  const results = [];
  const numbers = [];
  for (let x = 0; x < 3; x++) {
    let shot = Math.round(Math.random() * 6);
    results.push(vegetables[shot]);
    numbers.push(shot);
  }
  return { results, numbers };
};
//Funcion para realizar la tirada
const insertVegetables = (vegetables) => {
  for (let x = 0; x < vegetables.length; x++) {
    vegsArray[x].src = `./img/${vegetables[x]}`;
    figsArray[x].appendChild(vegsArray[x]);
  }
  cash === 0 ? (insert.disabled = false) : (insert.disabled = true);
};

//Funcion para comprobar el premio
const checkPrize = (numbers) => {
  // Comprobamos que ninguna verdura es zanahoria
  if (numbers[0] !== 6 && numbers[1] !== 6 && numbers[2] !== 6) {
    // Si no son zanahoria pero son las tres iguales
    if (numbers[0] === numbers[1] && numbers[2] === numbers[1]) {
      return 5;
    } else if (
      //Si no son zanahorias pero hay dos iguales
      numbers[0] === numbers[1] ||
      numbers[1] === numbers[2] ||
      numbers[0] === numbers[2]
    ) {
      return 2;
    }
  } else {
    //Si hay alguna zanahoria en la tirada
    //Comprobamos las zanahorias que hay con el metodo .filter
    const carrot = numbers.filter((num) => num === 6);
    if (carrot.length === 1) {
      //Si hay una zanahoria
      // Y ademas las otras dos verduras son iguales
      if (
        numbers[0] === numbers[1] ||
        numbers[1] === numbers[2] ||
        numbers[0] === numbers[2]
      ) {
        return 3;
      } else {
        //Si hay una zanahoria y las otras dos verduras son diferentes
        return 1;
      }
    } else if (carrot.length === 2) {
      //Si hay dos zanahorias
      return 4;
    } else if (carrot.length === 3) {
      //Si hay tres zanahorias
      return 10;
    } else {
      //Si ninguna verdura es igual
      return 0;
    }
  }
};

//Funcion para mostrar el historial de tirada
const showHistory = (prize, oldCash) => {
  if (prize) {
    let thr0w = document.createElement("li");
    thr0w.innerText = `${prize} + ${oldCash} = ${prize + oldCash} $`;
    history.appendChild(thr0w);
    historial.scroll(0, 200);
  } else {
    let thr0w = document.createElement("li");
    thr0w.innerText = `${oldCash} $`;
    history.appendChild(thr0w);
    historial.scroll(0, 200);
  }
};
