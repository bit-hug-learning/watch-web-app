const input = document.querySelector(".countdown__text");

input.addEventListener("change", show);

function show(event) {
  // console.log(event);
  console.log(event.target.value);
}