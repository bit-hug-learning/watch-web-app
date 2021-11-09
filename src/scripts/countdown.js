const input = document.querySelector(".countdown__text");
const buttonStart = document.querySelector(".countdown__button--start");
const buttonPause = document.querySelector(".countdown__button--pause");
const buttonReset = document.querySelector(".countdown__button--reset");
const text = document.querySelector(".time");

let cont = 0;
let isPaused = false;
let isReset = false;
let isOn = false;

buttonStart.addEventListener("click", go);

function go() {
  let p = document.createElement("p");
  p.style.fontSize = "2rem";
  let display = text;
  let hours, minutes, seconds;
  buttonStart.setAttribute("disabled", true);
  let duration = input.value;
  let tick;

    display.insertAdjacentElement("afterend", p);
    if (input.value != "" && !isNaN(parseInt(input.value))) {
      let timer = duration;
      p.textContent = "";

      tick = setInterval(() => {
          if(!isPaused) {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt(timer % 3600 / 60 , 10);
            seconds = parseInt(timer % 3600 - 60*parseInt(timer % 3600 / 60,10), 10);
            
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            console.log(hours, minutes, seconds)
            display.textContent = `${hours}:${minutes}:${seconds}`;
            
            if (--timer < 0) {
              buttonStart.removeAttribute("disabled")
              p.textContent = "Time's up!!"
              clearInterval(tick);
            }
          }  
             }, 1000)
    } else {
      cont == 0 ?
      p.textContent = "Insert a number" : "";
      cont++;
      }

  buttonPause.addEventListener("mouseup", pause);

  function pause() {
    isPaused = !isPaused;
    console.log(isPaused)
    buttonPause.textContent = isPaused ? "Play" : "Pause";
  }
  
  buttonReset.addEventListener("click", reset);

  function reset() {
    isReset = true;
    isPaused = false;
    buttonStart.removeAttribute("disabled");
    display.textContent = "00:00:00";
    clearInterval(tick);
    buttonReset.removeEventListener("click", reset);
    buttonPause.removeEventListener("mouseup", pause);
  }

}
