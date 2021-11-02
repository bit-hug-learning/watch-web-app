function clock() {
  let clockTime = new Date();

  const hour = document.querySelector("#hour")
  const minute = document.querySelector("#minute")
  const second = document.querySelector("#second")
  const day = document.querySelector("#day")
  const month = document.querySelector("#month")
  const date = document.querySelector("#date")

  //number time
  let whours = clockTime.getHours();
  let wminutes = clockTime.getMinutes();
  let wseconds = clockTime.getSeconds();
  
  if (hour < 12){
    period.textContent = " a.m."
  }
  else {
    period.textContent = " p.m."
  }

  if(whours < 10){
    whours = '0' + whours;
  }
  if(wminutes < 10){
    wminutes = '0' + wminutes;
  }
  if(wseconds < 10){
    wseconds = '0' + wseconds;
  }
  
  hour.textContent = whours
  minute.textContent = wminutes
  second.textContent = wseconds
  
  //day time
  let listDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let listMonths = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

  let actualDay = clockTime.getDay();
  let actualMonth = clockTime.getMonth();
  let actualDate = clockTime.getDate();

  day.textContent = listDays[actualDay];
  month.textContent = listMonths[actualMonth];
  date.textContent = actualDate;

  setTimeout(clock,1000);
}
clock();