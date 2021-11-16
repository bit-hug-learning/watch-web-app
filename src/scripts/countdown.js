const input = document.querySelector(".countdown__text");
const buttonStart = document.querySelector(".countdown__button--start");
const buttonPause = document.querySelector(".countdown__button--pause");
const buttonReset = document.querySelector(".countdown__button--reset");
const text = document.querySelector(".time");

let cont = 0;
let isPaused = false;
let isReset = false;
let isOn = false;
let timeUpCounter = 0; 
let p = document.createElement("p");
p.classList.add("warning-msg");

buttonStart.addEventListener("click", go);

function go() {
  let display = text;
  let hours, minutes, seconds;
  let duration = input.value;
  let tick;
  timeUpCounter > 0 && text.nextSibling.remove(); 
  
  buttonStart.setAttribute("disabled", true);
  display.insertAdjacentElement("afterend", p);
  
  if (input.value != "" && typeof(parseInt(input.value,10)) != "number" || input.value == parseInt(input.value,10)) {
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
          buttonStart.removeAttribute("disabled");
          p.textContent = "Time's up!!";
          p.style.backgroundColor = "#b3f3b1";
          clearInterval(tick);
          timeUpCounter++;
        }
      }  
  }, 1000)
    } else {
      p.textContent = "Insert a valid number"; 
      p.style.backgroundColor = "#f3b1b1"   
      cont++;
      buttonStart.removeAttribute("disabled");
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
