function clock() {
  let clockTime = new Date();
  let hours = clockTime.getHours();
  let minutes = clockTime.getMinutes();
  let seconds = clockTime.getSeconds();
  
  if (hour < 12){
    period.textContent = "AM"
  }
  else {
    period.textContent = "PM"
  }

  if(hours < 10){
    hours = '0' + hours;
  }
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  
  hour.textContent = hours
  minute.textContent = minutes
  second.textContent = seconds
  
  setTimeout(clock,1000);
}
clock();
