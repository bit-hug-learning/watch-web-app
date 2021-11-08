const input = document.querySelector(".countdown__text");
const buttonSet = document.querySelector(".countdown__button--set");
const buttonStart = document.querySelector(".countdown__button--start");
const buttonStop = document.querySelector(".countdown__button--stop");
const hours = document.querySelector(".countdown__hours");
const minutes = document.querySelector(".countdown__minutes");
const seconds = document.querySelector(".countdown__seconds");
const text = document.querySelector("#time")

buttonSet.addEventListener("click", go);

function go() {
  let duration = input.value;
  let display = text;
  let timer = duration, hours, minutes, seconds;
  setInterval(() => {

    hours = parseInt(timer / 60, 10);
    minutes = parseInt(timer % 60, 10);
    // seconds = parseInt(timer % 60, 10);
    console.log(hours)
    console.log(minutes)
    // console.log(seconds)
    // seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    
    if (--timer < 0) {
      timer = input.value;
    }

    }, 1000)
  
}
