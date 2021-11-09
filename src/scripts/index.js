const bodyScrollArea = document.querySelector(".screen__scroll");
const watchIcon = document.querySelector(".screen__item--watch");
const cronometerIcon = document.querySelector(".screen__item--cronometer");
const countdownIcon = document.querySelector(".screen__item--countdown");

  [watchIcon, cronometerIcon, countdownIcon].forEach(item => {
    item.addEventListener("click", scrollTo);
  })

  function scrollTo(event) {
    if(event.target.classList[1] == "screen__item--watch" ) {
      bodyScrollArea.scrollLeft = 111;
      watchIcon.classList.add("icon-selected");
      cronometerIcon.classList.remove("icon-selected");
      countdownIcon.classList.remove("icon-selected");
    }
    if(event.target.classList[1] == "screen__item--cronometer" ) {
      bodyScrollArea.scrollLeft = 551;
      watchIcon.classList.remove("icon-selected");
      cronometerIcon.classList.add("icon-selected");
      countdownIcon.classList.remove("icon-selected");
    }
    if(event.target.classList[1] == "screen__item--countdown" ) {
      bodyScrollArea.scrollLeft = 991;
      watchIcon.classList.remove("icon-selected");
      cronometerIcon.classList.remove("icon-selected");
      countdownIcon.classList.add("icon-selected");
    }
  }
