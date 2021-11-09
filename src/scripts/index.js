const bodyScrollArea = document.querySelector(".screen__scroll");
const watchIcon = document.querySelector(".screen__item--watch");
const cronometerIcon = document.querySelector(".screen__item--cronometer");
const countdownIcon = document.querySelector(".screen__item--countdown");

// bodyScrollArea.addEventListener("scroll", scroll);

  [watchIcon, cronometerIcon, countdownIcon].forEach(item => {
    item.addEventListener("click", scrollTo);
  })

  function scrollTo(event) {
    if(event.target.classList[1] == "screen__item--watch" ) {
      bodyScrollArea.scrollLeft = 111;
    }
    if(event.target.classList[1] == "screen__item--cronometer" ) {
      bodyScrollArea.scrollLeft = 551;
    }
    if(event.target.classList[1] == "screen__item--countdown" ) {
      bodyScrollArea.scrollLeft = 991;
    }
  }
