// window.addEventListener("gamestarted", ev => console.log("gamestarted"))
// window.addEventListener("letter", ev => console.log("letter"))
// window.addEventListener("correctletter", ev => console.log("correctletter"))
// window.addEventListener("wrongletter", ev => console.log("wrongletter"))
// window.addEventListener("word", ev => console.log("word"))
// window.addEventListener("correctword", ev => console.log("correctword"))
// window.addEventListener("wrongword", ev => console.log("wrongword"))
// window.addEventListener("endgame", ev => console.log("endgame"))

window.addEventListener("endgame", ev => console.log("endgame"));

const score = document.querySelector("main div.score");

// Elemento para exibir letras corretas
const correctTypedLetters = document.createElement("div");
score.appendChild(correctTypedLetters);

// Elemento para exibir o cronômetro
const timerElement = document.createElement("div");
score.appendChild(timerElement);

let counterCorrectTypedWords = 0;

// Adicionar contador de 40 segundos
let timeLeft = 40;

function updateTimer() {
  timerElement.innerText = `Tempo restante: ${timeLeft} segundos`;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000); // Atualizar a cada segundo (1000ms)
  } else {
    // O tempo acabou, exibir mensagem e instruções
    timerElement.innerText = "Você perdeu, pressione F5 para reiniciar";
    // Você pode adicionar mais lógica aqui se necessário
  }
}

updateTimer(); // Iniciar o contador


const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "plugins/alan-rocha-ribeiro.css";
document.head.appendChild(link);


const bodyStyle = document.body.style;
bodyStyle.backgroundImage = 'url("plugins/bomb.jpg")'; 
bodyStyle.backgroundSize = 'cover'; 

window.addEventListener("correctletter", ev => {
  counterCorrectTypedWords++;
  correctTypedLetters.innerText = `${counterCorrectTypedWords} letras corretas`;
});

const audio = new Audio("plugins/EfeitoSonoro.mp3");
const eventsInteract = [
  "click",
  "keydown",
  "scroll",
];

function handleInteraction() {
  eventsInteract.forEach(evName => window.removeEventListener(evName, handleInteraction));
  console.log("asdasd");
  audio.play();
}

eventsInteract.forEach(evName => window.addEventListener(evName, handleInteraction));


